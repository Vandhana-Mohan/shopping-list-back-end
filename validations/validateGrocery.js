const Joi = require("joi");
const createValidator = require("./createValidator");

const grocerySchema = Joi.object({
  name: Joi.string().required(),
  image_url: Joi.string().required(),
  category: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
  unit: Joi.number().required(),
  is_organic: Joi.boolean().required(),
});

module.exports = createValidator(grocerySchema);
