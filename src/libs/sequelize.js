const { Sequelize } = require('sequelize');
const setup = require('../db/models');
const { config } = require('../config/config');

const sequelize = new Sequelize(config.databaseUrl, {
    dialect: 'postgres',
    logging: config.isProd ? false : console.log,
});

(async function(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        setup(sequelize);
    }catch(e) {
        console.error('Unable to connect to the database:', e);
    }
})();

module.exports = sequelize;