const router = require('express').Router();
const productService = require('../services/product.service');

router.get('/', async (req, res) => {
	res.json(await productService.getAllProducts());
});

router.get('/:id', async (req, res) => {
	let { id } = req.params;
	req.json(await productService.getProductById(id));
});

module.exports = router;
