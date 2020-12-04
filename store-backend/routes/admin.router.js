const router = require('express').Router();
const userService = require('../services/user.service');
const coffeeService = require('../services/coffee.service');
const productService = require('../services/product.service');

router.use((req, res, next) => {
	if (req.session.isAdmin) {
		next();
	} else {
		res.sendStatus(403);
	}
});

router.post('/coffee/add', async (req, res) => {
	let { coffee } = req.body;
	res.status(201).json(await coffeeService.addCoffee(coffee));
});

router.post('/products/add', async (req, res) => {
	let { product } = req.body;
	res.status(201).json(await productService.addProduct(product));
});

router.get('/users', async (req, res) => {
	res.json(await userService.getAllUsers());
});

// router.post('/users/add', (req, res) => {
// 	const { email, password } = req.body;
// 	const user = new User({ email, password });
// 	user
// 		.save()
// 		.then(() => res.sendStatus(200))
// 		.catch((err) => {
// 			res.status(500).json({ err });
// 		});
// });

// router.delete('/users/remove', (req, res) => {
// 	User.findByIdAndRemove(req.user.id).then(() => {
// 		res.sendStatus(200);
// 	});
// });

module.exports = router;
