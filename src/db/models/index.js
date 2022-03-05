import { Sequelize } from "sequelize";
import { User, UserSchema } from "./user";

function setup(sequelize){
    User.init(UserSchema, User.config(sequelize));
}

export default setup;