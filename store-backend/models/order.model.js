const mongoose = require('mongoose');
const addressSchema = require('./address.schema');

const orderSchema = new mongoose.Schema(
	{
		user_id: {
			type: mongoose.Types.ObjectId,
			required: true,
			ref: 'users',
		},
		products: {
			type: [mongoose.Types.ObjectId],
			required: true,
			default: undefined,
			ref: 'products',
		},
		coffees: {
			type: [mongoose.Types.ObjectId],
			required: true,
			default: undefined,
			ref: 'coffees',
		}
		address: {
			type: addressSchema,
			required: true,
		},
		total: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
