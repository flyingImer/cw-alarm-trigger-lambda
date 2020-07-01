
## Context
This is a quick PoC over triggering Lambda function on CloudWatch(CW) alarm state changes. In this PoC, it arbitrarily chooses the sum of `ApproximateNumberOfMessagesNotVisible` and `ApproximateNumberOfMessagesVisible` CW metrics of a SQS queue over a certain period as a signal for empty queue. The signal will triggers a Lambda function via a EventBridge rule.

# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
