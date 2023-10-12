import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class LayersStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const layer = new lambda.LayerVersion(this, "yourlayer", {
      code: lambda.Code.fromAsset("lamda_layers/nodejs"),
      compatibleRuntimes: [lambda.Runtime.NODEJS_18_X],
    });

    const checkStoresLambda = new lambda.Function(this, `testing-lambda-layers`, {
      functionName: `testing-lambda-layers`,
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset("lambda"),
      handler: "function.handler",
      layers: [layer],
    });
  }
}
