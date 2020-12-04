const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
			minlength: 2,
		},
		description: {
			type: String,
			trim: true,
		},
		price: {
			type: Number,
			required: true,
		},
		hidden: Boolean,
	},
	{
		timestamps: true,
	}
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
