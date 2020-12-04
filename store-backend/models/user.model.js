const mongoose = require('mongoose');
const { isEmail } = require('validator');
const addressSchema = require('./address.schema');

const accountSchema = new mongoose.Schema({
	isAdmin: {
		type: Boolean,
		default: false,
	},
	beans: {
		type: Number,
		min: 0,
	},
	cart: [mongoose.Schema.Types.ObjectId],
	address: addressSchema,
});

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: [true, 'Email is required.'],
			unique: [true, 'Email already in use.'],
			lowercase: true,
			trim: true,
			validate: [isEmail, 'Invalid email address.'],
		},
		hash: {
			type: String,
			required: true,
		},
		salt: {
			type: String,
			required: true,
		},
		account: {
			type: accountSchema,
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('User', userSchema);

module.exports = User;
