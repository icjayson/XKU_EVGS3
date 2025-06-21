import { PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import s3Client from "./s3";

const BUCKET_NAME = "xuongkyuc";

export const uploadToS3 = async (file: File, filePath: string) => {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: filePath,
    Body: buffer,
    ContentType: file.type,
  });

  try {
    await s3Client.send(command);
    return `https://s3.evgcloud.net/${BUCKET_NAME}/${filePath}`;
  } catch (error) {
    console.error("Error uploading to S3:", error);
    throw new Error("Failed to upload file to S3");
  }
};

export const deleteFromS3 = async (filePath: string) => {
  const command = new DeleteObjectCommand({
    Bucket: BUCKET_NAME,
    Key: filePath,
  });

  try {
    await s3Client.send(command);
  } catch (error) {
    console.error("Error deleting from S3:", error);
    throw new Error("Failed to delete file from S3");
  }
};

export const getS3Url = (filePath: string) => {
  return `https://s3.evgcloud.net/${BUCKET_NAME}/${filePath}`;
}; 