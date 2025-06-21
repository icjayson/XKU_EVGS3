import { S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: "VN-HN-ZONE5-OSS1",
  endpoint: "https://s3.evgcloud.net",
  credentials: {
    accessKeyId: "rWpOuTDQJWA6L4uQ6So0",
    secretAccessKey: "oVGCM3645jbDyP2BO6IA",
  },
  forcePathStyle: true, // Cần thiết cho EVG S3
});

export default s3Client; 