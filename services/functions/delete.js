import handler from "../util/handler"
import dynamodb from "../util/dynamodb"

export const main = handler( async (event) => {
    const params = {
        TableName: process.env.TABLE_NAME,

        Key : {
            userID: event.requestContext.authorizer.iam.cognitoIdentity.identityId,
            noteID: event.pathParameters.id,
        },
    };

    await dynamodb.delete(params);

    return { status : true };
});