#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CwAlarmTriggerLambdaStack } from '../lib/cw-alarm-trigger-lambda-stack';

const app = new cdk.App();
new CwAlarmTriggerLambdaStack(app, 'CwAlarmTriggerLambdaStack');
