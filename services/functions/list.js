import handler from "../util/handler";
import dynamodb from "../util/dynamodb";

export const main = handler( async (event) => {
    const params= {
        TableName: process.env.TABLE_NAME,
        KeyConditionExpression: "userID = :userID",
        ExpressionAttributeValues: {
            ":userID": event.requestContext.authorizer.iam.cognitoIdentity.identityId,
        }
    };

    const result = await dynamodb.query(params);

    return result.Items;
})