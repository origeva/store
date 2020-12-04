const Product = require('../models/product.model');

const addProduct = async (product) => {
	return await Product.create(product);
};

const removeProductById = async (productId) => {
	return await Product.findByIdAndRemove(productId);
};

const removeProductByConditions = async (product) => {
	return await Product.findOneAndRemove(product);
};

const getProductById = async (productId) => {
	return await Product.findById(productId);
};

const getProductByConditions = async (product) => {
	return await Product.findOne(product);
};

const getAllProducts = async () => {
	return await Product.find();
};

module.exports = {
	addProduct,
	removeProductById,
	removeProductByConditions,
	getProductById,
	getProductByConditions,
	getAllProducts,
};
