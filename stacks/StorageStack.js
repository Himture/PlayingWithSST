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

  const bucket = new Bucket(stack, "Uploads")

  return {
    table,
    bucket,
  };
}