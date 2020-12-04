const User = require('../models/user.model');
// const { generateHash, validatePassword } = require('../lib/passwordUtils');

const addUser = async (user) => {
	return await User.create(user);
};

const removeUserById = async (userId) => {
	return await User.findByIdAndRemove(userId);
};

const removeUserByEmail = async (userEmail) => {
	return await User.findOneAndRemove({ email: userEmail });
};

const getUserById = async (userId) => {
	return await User.findById(userId);
};

const getUserByEmail = async (userEmail) => {
	return await User.findOne({ email: userEmail });
};

const getAllUsers = async () => {
	return await User.find();
};

module.exports = {
	addUser,
	removeUserById,
	removeUserByEmail,
	getUserById,
	getUserByEmail,
	getAllUsers,
};
