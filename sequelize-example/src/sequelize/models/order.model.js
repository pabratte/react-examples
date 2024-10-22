const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Order = sequelize.define('order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    });
}