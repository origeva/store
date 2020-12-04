const Coffee = require('../models/coffee.model');

const addCoffee = async (coffee) => {
	return await Coffee.create(coffee);
};

const removeCoffeeById = async (coffeeId) => {
	return await Coffee.findByIdAndRemove(coffeeId);
};

const removeCoffeeByConditions = async (coffee) => {
	return await Coffee.findOneAndRemove(coffee);
};

const getCoffeeById = async (coffeeId) => {
	return await Coffee.findById(coffeeId);
};

const getCoffeeByConditions = async (coffee) => {
	return await Coffee.findOne(coffee);
};

const getAllCoffee = async () => {
	return await Coffee.find();
};

module.exports = {
	addCoffee,
	removeCoffeeById,
	removeCoffeeByConditions,
	getCoffeeById,
	getCoffeeByConditions,
	getAllCoffee,
};
