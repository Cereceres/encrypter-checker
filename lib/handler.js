const fs = require('fs');

const co = require('co');
const AWS = require('aws-sdk');

const SERVER_SIDE_ENCRYPTION = process.env.SERVER_SIDE_ENCRYPTION || 'AES256';
const s3 = new AWS.S3();

module.exports = (event, cb) => co(function *() {
    for (let i = 0; i < event.Records.length; i++) {
        const record = event.Records[i];
        const Key = record.s3.object.key;
        const Bucket = record.s3.bucket.name;
        const { ServerSideEncryption, error } = yield s3
            .headObject({ Key: Key, Bucket: Bucket })
            .promise()
            .catch((error) => ({ error: error }));

        if (ServerSideEncryption || error) continue;

        const { error: errorInCopy } = yield s3
            .copyObject({
                Bucket: Bucket,
                CopySource: `/${ Bucket }/${ Key}`,
                Key: Key,
                ServerSideEncryption: SERVER_SIDE_ENCRYPTION
            })
            .promise();
    }
})
    .then((res) => cb(null, res))
    .catch((error) => cb(error));
