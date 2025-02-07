import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as lambda from "aws-cdk-lib/aws-lambda-nodejs";

export class TaskManagerApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, {
      ...props,
      env: {
        region: "eu-west-2",
        account: process.env.CDK_DEFAULT_ACCOUNT,
      },
    });

    new s3.Bucket(this, "task-manager", {
      bucketName: "task-backup-bucket",
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    new lambda.NodejsFunction(this, "GetTaskFunction", {
      functionName: "GetTaskLambda",
      entry: "src/handlers/getTask/index.ts",
      handler: "getTask",
      runtime: cdk.aws_lambda.Runtime.NODEJS_20_X,
    });
  }
}
