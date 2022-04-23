const { Model, DataTypes, Sequelize } = require('sequelize');

const CUSTOMER_TABLE = 'customers';

const CustomerSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: false
    },
    lastname: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: false
    },
    country: {
        allowNull: true,
        type: DataTypes.STRING,
        unique: false
    },
    birthday: {
        allowNull: true,
        type: DataTypes.DATE,
        unique: false
    },
    userId: {
        field: 'user_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: true,
        references: {
            model: CUSTOMER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
}

class Customer extends Model {
    static associate(models){
        this.belongsTo(models.User, {as: 'user'});
    }
    
    static config(sequelize){
        return {
            sequelize,
            tableName: CUSTOMER_TABLE,
            modelName: 'Customer',
            timestamps: false,
        }
    }
}

module.exports = {
    Customer,
    CUSTOMER_TABLE,
    CustomerSchema
}