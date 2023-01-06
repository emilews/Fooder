import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
const Reminder = sequelize.define('Reminder', {
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
    count: DataTypes.INTEGER,
    next_trigger: DataTypes.DATE(6),
    triggered_at: Datatypes.ARRAY(DataTypes.DATE(6)),
});

export default Reminder;