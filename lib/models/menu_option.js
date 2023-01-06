import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
const MenuOption = sequelize.define('MenuOption', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    menu_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Menu',
            key: 'id'
        }
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    users_id: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        references: {
            model: 'User',
            key: 'id'
        }
    },
    created_at: DataTypes.DATE(6),
    updated_at: DataTypes.DATE(6)
});

export default MenuOption;