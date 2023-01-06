import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    is_admin: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE(6),
    updated_at: DataTypes.DATE(6),
    active_token: DataTypes.STRING,
    tokens: DataTypes.ARRAY(DataTypes.STRING)
});

export default User;