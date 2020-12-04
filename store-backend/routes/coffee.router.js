const router = require('express').Router();
const Coffee = require('../models/coffee.model');

router.get('/', (req, res) => {
	Coffee.find((err, coffees) => {
		if (err) {
			res.status(500).json({ err });
		} else {
			console.log(coffees);
			res.json(coffees);
		}
	});
});

router.post('/', (req, res) => {
	const { name, image, description, strength, price } = req.body;
	new Coffee({ name, image, description, strength, price })
		.save()
		.then((err, coffee) => {
			if (err) {
				res.status(500).json({ err });
			} else {
				res.status(201).json(coffee);
			}
		})
		.catch((err) => res.status(500).json({ err }));
});

router.delete('/remove', (req, res) => {
	const { id } = req.body;
	Coffee.findByIdAndDelete(id)
		.then(() => {
			res.sendStatus(200);
		})
		.catch((err) => res.status(500).json({ err }));
});

router.put('/update', (req, res) => {
	const { id, name, image, description, strength, price } = req.body;
	Coffee.findByIdAndUpdate(id, { name, image, description, strength, price })
		.then((coffee) => res.status(200).json(coffee))
		.catch((err) => res.status(500).json({ err }));
});

module.exports = router;
