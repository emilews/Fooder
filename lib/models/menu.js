import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
const Menu = sequelize.define('Menu', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    day: DataTypes.DATE,
    created_at: DataTypes.DATE(6),
    active: DataTypes.BOOLEAN,
    seen_by: DataTypes.ARRAY(DataTypes.INTEGER),
    admin_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    updated_at: DataTypes.DATE(6)
});

export default Menu;