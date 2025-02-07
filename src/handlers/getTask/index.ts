import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const getTask = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from Lambda - Task Retrieved!",
      event: event,
    }),
  };
};
