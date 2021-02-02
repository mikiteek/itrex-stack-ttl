const Joi = require("joi");

const validateAddToStack = (body) => {
  const validationSchema = Joi.object({
    data: Joi.any().required(),
  });
  const validationResult = validationSchema.validate(body);
  return validationResult.error;
}

module.exports = {
  validateAddToStack,
}