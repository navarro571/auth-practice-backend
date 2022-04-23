const { Model, DataTypes, Sequelize } = require('sequelize');

const ADMIN_TABLE = 'admins';

const AdminSchema = {
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
    userId: {
        field: 'user_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: true,
        references: {
            model: ADMIN_TABLE,
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

class Admin extends Model {
    static associate(models){
        this.belongsTo(models.User, { as: 'user' });
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: ADMIN_TABLE,
            modelName: 'Admin',
            timestamps: false,
        }
    }
}

module.exports = {
    Admin,
    ADMIN_TABLE,
    AdminSchema
}