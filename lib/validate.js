const joi = require('joi');

const schema = joi.object().keys({
    Records: joi.array().items(joi
        .object().keys({
            s3: joi.object().required()
        }).unknown()).required()
});

module.exports = (event) => {
    const { value, error } = joi.validate(event, schema);

    if (error) return { error: error };

    return Object.freeze(value);
};
