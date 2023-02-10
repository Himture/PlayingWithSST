import handler from "../util/handler";
import dynamodb from "../util/dynamodb";

export const main = handler(async (event) => {
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.TABLE_NAME,
        Key: {
            userID: "123",
            noteID: event.pathParameters.id,
        },
        UpdateExpression: "SET content = :content, attachment= :attachment",
        ExpressionAttributeValues : {
            ":content" : data.content || null,
            ":attachment" : data.attachment || null,
        },
        ReturnValues: "ALL_NEW"
    }

    await dynamodb.update(params);

    return {status: true};
})