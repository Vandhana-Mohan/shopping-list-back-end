const Joi = require("joi");
const createValidator = require("./createValidator");

const grocerySchema = Joi.object({
  name: Joi.string().required(),
  image_url: Joi.string().required(),
  category: Joi.string(),
  is_organic: Joi.boolean(),
});

module.exports = createValidator(grocerySchema);
