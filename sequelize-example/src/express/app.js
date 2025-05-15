const express = require('express');
const bodyParser = require('body-parser');

const routes = {
	categories: require('./routes/categories'),
	items: require('./routes/items'),
	orders: require('./routes/orders'),
	// Add more routes here...
	// items: require('./routes/items'),
};

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// item routes
app.get(`/api/items`, routes.items.getAll);
app.get(`/api/items/:id`, routes.items.getById);
app.post(`/api/items`, routes.items.create);
app.put(`/api/items/:id`, routes.items.update);
app.delete(`/api/items/:id`, routes.items.remove);

// category routes
app.get(`/api/categories`, routes.categories.getAll);
app.get(`/api/categories/:id`, routes.categories.getById);
app.post(`/api/categories`, routes.categories.create);
app.put(`/api/categories/:id`, routes.categories.update);
app.delete(`/api/categories/:id`, routes.categories.remove);

// order routes
app.get(`/api/orders`, routes.orders.getAll);
app.get(`/api/orders/:id`, routes.orders.getById);
app.post(`/api/orders`, routes.orders.create);
app.put(`/api/orders/:id`, routes.orders.update);
app.delete(`/api/orders/:id`, routes.orders.remove);
app.get(`/api/orders/:id/items`, routes.orders.listItems);

module.exports = app;