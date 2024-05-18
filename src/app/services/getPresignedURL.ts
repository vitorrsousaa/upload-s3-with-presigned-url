import { delay } from "@/utils/delay";
// import axios from "axios";

export async function getPresignedURL(file: File) {
	// const { data } = await axios.post<{ signedUrl: string }>("lambda url", {
	// 	fileName: file.name,
	// });

	// return data.signedUrl;

	await delay(1500);

	return `https://example.com/${file.name}`;
}
