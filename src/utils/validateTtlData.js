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

const validateGetItemByKey = (query) => {
  const validationSchema = Joi.object({
    key: Joi.string().required(),
  });
  const validationResult = validationSchema.validate(query);
  return validationResult.error;
}

module.exports = {
  validateAddToTtl,
  validateGetItemByKey,
}