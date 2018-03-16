const handler = require('./lib/handler');
const validate = require('./lib/validate');

exports.handler = (event, ctx, cb) => {
    try {
        const params = validate(event);
        handler(params, cb);
    } catch (error) {
        cb(error);
    }
};
