import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as TaskManagerApi from "../lib/task-manager-api-stack";

test("S3 Bucket Created", () => {
  const app = new cdk.App();
  const stack = new TaskManagerApi.TaskManagerApiStack(app, "MyTestStack");
  const template = Template.fromStack(stack);

  template.hasResourceProperties("AWS::S3::Bucket", {
    BucketName: "task-backups",
  });
});
