import * as uuid from "uuid";
import handler from "../util/handler";
import dynamoDB from "../util/dynamodb";

export const main = handler(async (event) => {

    const data =  JSON.parse(event.body);
    const params={
        TableName : process.env.TABLE_NAME,
        Item: {
            userID: event.requestContext.authorizer.iam.cognitoIdentity.identityId,
            noteID: uuid.v1(),
            content: data.content,
            attachment: data.attachment,
            createdAt: Date.now()
        },
    };

    await dynamoDB.put(params);

    return params.Item;
})