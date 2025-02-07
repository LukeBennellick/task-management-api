import { APIGatewayProxyEvent } from "aws-lambda";
import { getTask } from ".";

describe("handler#getTask", () => {
  it("should return an expected lambda response", async () => {
    const result = await getTask({} as APIGatewayProxyEvent);
    expect(result).toEqual({
      statusCode: 200,
      body: JSON.stringify({
        message: "Hello from Lambda - Task Retrieved!",
        event: {},
      }),
    });
  });
});
