const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
	country: {
		type: String,
		required: true,
	},
	state: {
		type: String,
	},
	address: {
		type: String,
		required: true,
	},
	postalCode: {
		type: Number,
		required: true,
	},
});

module.exports = addressSchema;
