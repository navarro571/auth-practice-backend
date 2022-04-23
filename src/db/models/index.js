const { Sequelize } = require("sequelize");
const { Admin, AdminSchema } = require("./admin");
const { Customer, CustomerSchema } = require("./customer");
const { User, UserSchema } = require("./user");

function setup(sequelize){
    User.init(UserSchema, User.config(sequelize));
    Customer.init(CustomerSchema, Customer.config(sequelize));
    Admin.init(AdminSchema, Customer.config(sequelize));

    Customer.associate(sequelize.models);
    Admin.associate(sequelize.models);
}

module.exports = setup;