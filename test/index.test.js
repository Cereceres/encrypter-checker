const assert = require('assert');
const fs = require('fs');

const AwsTest = require('aws-lambda-testing');
const { handler } = require('../index');
const features = require('./features');
const eventSample = require('./event-sample');

const awsTest = new AwsTest();
awsTest.setHandler(handler);

describe('test to handler of s3 listener', () => {
    it('should return a function handler', () => assert(typeof handler == 'function'));

    it('should exec the handler and call the api', () => {
        features();
        awsTest.setTimeout(300000);
        awsTest.setMemoryUsageLimit(120);
        return awsTest.exec(eventSample);
    });

    it('should check if encripted is setted', () => {
        features();
        awsTest.setTimeout(300000);
        awsTest.setMemoryUsageLimit(120);
        return awsTest.exec(eventSample);
    });
});
