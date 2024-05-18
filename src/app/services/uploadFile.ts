import axios from "axios";

export async function uploadFile(
	url: string,
	file: File,
	onProgress?: (progressEvent: number) => void,
) {
	// Sempre que for fazer o upload do arquivo para presigned URL, é necessário usar o método url
	// NESSA REQUISIÇÃO DO BUCKET, É NECESSÁRIO CONFIGURAR O CORS PARA O BUCKET

	await axios.put(url, file, {
		headers: {
			"Content-Type": file.type,
		},
		onUploadProgress: (progressEvent) => {
			const percentCompleted = Math.round(
				(progressEvent.loaded * 100) / (progressEvent.total || 1),
			);

			onProgress?.(percentCompleted);
		},
	});
}
