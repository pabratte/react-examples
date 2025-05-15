const { Sequelize, DataTypes } = require('sequelize');

// In a real app, you should keep the database connection URL as an environment variable.
// But for this example, we will just use a local SQLite database.
// const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'db.sqlite',
	logQueryParameters: true,
	benchmark: true
});

// define models
sequelize.define('category', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

sequelize.define('item', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false, 
	},
});

sequelize.define('order', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
});

// define associations
const { category, item, order } = sequelize.models;

item.belongsTo(category);
category.hasMany(item);
item.belongsToMany(order, { through: 'order_item' });
order.belongsToMany(item, { through: 'order_item' });

// export the sequelize connection instance to be used around our app
module.exports = sequelize;