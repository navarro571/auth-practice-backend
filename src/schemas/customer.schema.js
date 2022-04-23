const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string().min(3).max(30);
const country = Joi.string();
const birthday = Joi.date();
const user_username = Joi.string().min(3).max(30);
const user_email = Joi.string().email();
const user_password =  Joi.string();
const user_role = Joi.number().integer();

const customerId = Joi.object({
  id: id.required(),
});

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  country: country,
  birthday: birthday,
  user: Joi.object({
    username: user_username.required(),
    email: user_email.required(),
    password: user_password.required(),
    user_role: user_role.required()
  }).required()
});

const updateCustomerSchema = Joi.object({
  name,
  lastName,
  country,
  birthday,
  user_role
});

module.exports = { customerId, createCustomerSchema, updateCustomerSchema };
