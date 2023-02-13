import { Table, Bucket } from "@serverless-stack/resources";

export function StorageStack({ stack, app }) {
  const table = new Table(stack, "Notes", {
    fields:{
      userID: "string",
      noteID: "string"
    },
    primaryIndex:{
      partitionKey: "userID",
      sortKey: "noteID"}
  });

  const bucket = new Bucket(stack, "Uploads", {
    cors: [
      {
        maxAge: "1 day",
        allowedOrigins: ["*"],
        allowedHeaders: ["*"],
        allowedMethods: ["GET", "PUT", "POST", "DELETE", "HEAD"],
      },
    ],
  })
   
  return {
    table,
    bucket,
  };
}