const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string().min(3).max(30);
const user_username = Joi.string().min(3).max(30);
const user_email = Joi.string().email();
const user_password =  Joi.string();
const user_role = Joi.number().integer();

const adminId = Joi.object({
  id: id.required(),
});

const createAdminSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  user: Joi.object({
    username: user_username.required(),
    email: user_email.required(),
    password: user_password.required(),
    user_role: user_role.required()
  })
});

const updateAdminSchema = Joi.object({
  name,
  lastName
});

module.exports = { adminId, createAdminSchema, updateAdminSchema };
