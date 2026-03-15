import Joi from "joi";

const today = new Date();
const minDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

export const createClientSchema = Joi.object({
  clientId: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  dateOfBirth: Joi.date().less(minDate).required()
    .messages({ "date.less": "Client must be at least 18 years old" }),
  address: Joi.string().required(),
});