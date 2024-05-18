import { getPresignedURL } from "@/services/getPresignedURL";
import { uploadFile } from "@/services/uploadFile";
import { Button } from "@/ui/button";
import { Progress } from "@/ui/progress";
import { cn } from "@/utils/cn";
import { Loader2Icon, PackageOpenIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

export function Home() {
	const [isLoading, setIsLoading] = useState(false);
	const [uploads, setUploads] = useState<{ file: File; progress: number }[]>(
		[],
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		maxFiles: 3,
		onDropAccepted: (acceptedFiles) => {
			setUploads((prevState) =>
				prevState.concat(acceptedFiles.map((file) => ({ file, progress: 0 }))),
			);
		},
	});

	function handleRemoveUpload(index: number) {
		setUploads((prevState) => {
			const newState = [...prevState];
			newState.splice(index, 1);

			return newState;
		});
	}

	async function handleUpload() {
		setIsLoading(true);
		try {
			const uploadObjects = await Promise.all(
				uploads.map(async ({ file }) => ({
					url: await getPresignedURL(file),
					file,
				})),
			);

			const response = await Promise.allSettled(
				uploadObjects.map(({ url, file }, index) =>
					uploadFile(url, file, (progress) => {
						setUploads((prevState) => {
							const newState = [...prevState];

							const upload = newState[index];

							newState[index] = {
								...upload,
								progress,
							};

							return newState;
						});
					}),
				),
			);

			// const responseErrors = response.filter(
			//   ({ status }) => status === "rejected",
			// );

			response.forEach((response, index) => {
				if (response.status === "rejected") {
					console.log(
						`Erro ao fazer upload do arquivo ${uploads[index].file.name}`,
					);
				}
			});

			console.log(uploadObjects);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className="min-h-screen flex justify-center py-20 px-6">
			<div className="w-full max-w-xl">
				<div
					{...getRootProps()}
					className={cn(
						"border h-60 w-full rounded-md border-dashed transition-colors flex items-center justify-center flex-col cursor-pointer",
						isDragActive && "bg-slate-300/50",
					)}
				>
					<input {...getInputProps()} />
					{/* {isDragActive ? (
					<p>Solte os arquivos aqui</p>
				) : (
					<p>Drag 'n' drop some files here, or click to select files</p>
				)} */}
					<PackageOpenIcon className="size-10 stroke-1 mb-2" />
					<span>Solte os arquivos aqui</span>
					<small className="text-muted-foreground">
						Apenas arquivos PNG de até 1MB
					</small>
				</div>

				{uploads.length > 0 && (
					<div className="mt-10">
						<h2 className="text-2xl font-medium tracking-tight">
							Arquivos selecionados
						</h2>
						<div className="mt-4 space-y-2">
							{uploads.map(({ file, progress }, index) => (
								<div key={file.name} className="border p-3 rounded-md ">
									<div className="flex items-center justify-between">
										<span className="text-sm">{file.name}</span>

										<Button
											variant={"destructive"}
											size={"icon"}
											onClick={() => handleRemoveUpload(index)}
										>
											<Trash2Icon className="size-4" />
										</Button>
									</div>
									<Progress className="h-1 mt-3" value={progress} />
								</div>
							))}
						</div>
						<Button
							className="mt-4 w-full"
							onClick={handleUpload}
							disabled={isLoading}
						>
							{isLoading && <Loader2Icon className="size-4 animate-spin" />}
							Upload
						</Button>
					</div>
				)}
			</div>
		</div>
	);
}
