const Joi = require("joi");

const validateAddToTtl = (body) => {
  const validationSchema = Joi.object({
    key: Joi.string().required(),
    value: Joi.any().required(),
    ttl: Joi.number().integer().greater(0),
  });
  const validationResult = validationSchema.validate(body);
  return validationResult.error;
}

module.exports = {
  validateAddToTtl,
}