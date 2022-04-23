const { models } = require("../libs/sequelize");
const boom = require("@hapi/boom");

class UserService {
    type;

    constructor(type) {
        this.type = type;
    }

    async findByID(id) {
        const user = await models[this.type].findByPk(id);
        if(!user)
            throw boom.notFound('user not found');
        return user;
    }
    
    async get() {
        const res = await models[this.type].findAll();
        return res;
    }

    async create(data) {
        const newUser = await models[this.type].create(data, {
            include: ['user'],
        });
        delete newUser.dataValues.user.dataValues.password;
        return newUser;
    }

    async update(id, data) {
        const user = await this.findByID(id);
        const res = await user.update(data);
        return res;
    }

    async delete(id) {
        const user = await this.findByID(id);
        await user.destroy();
        return { 
            message: "User Deleted",
            id: id
         };
    }
    
}

module.exports = UserService;