const Joi = require("joi");
const createValidator = require("./createValidator");

const grocerySchema = Joi.object({
  name: Joi.string().required(),
  image_url: Joi.string().allow("").optional(),
  category: Joi.string().allow("").optional(),
  description: Joi.string().allow("").optional(),
  price: Joi.number().min(0).required(),
  quantity: Joi.number().min(0).required(),
  unit: Joi.string().allow("").optional(),
  is_organic: Joi.boolean().optional(),
});



module.exports = createValidator(grocerySchema);
