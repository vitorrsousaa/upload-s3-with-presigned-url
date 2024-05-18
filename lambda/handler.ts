// import { randomUUID } from "node:crypto";
// import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
// import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
// import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

// const s3Client = new S3Client();
// const dynamoClient = new DynamoDBClient();

// export async function handler(event) {
// 	const { fileName } = JSON.parse(event.body);

// 	if (!fileName) {
// 		return {
// 			statusCode: 400,
// 			body: JSON.stringify({ message: "fileName is required" }),
// 		};
// 	}

// 	const fileKey = `${randomUUID()}-${fileName}`;

// 	const s3Command = new PutObjectCommand({
// 		Bucket: "NAME_OF_BUCKET",
// 		Key: fileKey,
// 	});

// const dynamoCommand = new PutItemCommand({
// 	TableName: "NAME_OF_TABLE",
// 	Item: {
// 		fileKey: { S: fileKey },
// 	},
// });

// 	const signedURL = await getSignedUrl(s3Client, s3Command, { expiresIn: 300 });
// await dynamoClient.send(dynamoCommand);

// 	return {
// 		statusCode: 200,
// 		body: JSON.stringify({ signedURL, fileKey }),
// 	};
// }
