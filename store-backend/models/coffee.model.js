const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	image: {
		type: String,
		trim: true,
	},
	description: {
		type: String,
		trim: true,
	},
	strength: {
		type: Number,
	},
	price: {
		type: Number,
		required: true,
	},
});

const Coffee = mongoose.model('Coffee', coffeeSchema);

module.exports = Coffee;
