const router = require('express').Router();
const User = require('../models/user.model');
const { generateHash, validatePassword } = require('../lib/passwordUtils');

const forbidOthers = (req, res, next) => {
	if (req.user.email === req.params.email) {
		next();
	} else {
		res.sendStatus(403);
	}
};

router.post('/add', (req, res) => {
	const { email, password } = req.body;
	const user = new User({ email, password });
	user
		.save()
		.then(() => res.sendStatus(200))
		.catch((err) => {
			res.status(500).json({ err });
		});
});

router.post('/changepassword', (req, res) => {
	const { hash, salt } = generateHash(req.password);
	User.findByIdAndUpdate(req.user.id, { hash, salt }).then(() => {
		res.sendStatus(200);
	});
});

router.delete('/removeaccount', (req, res) => {
	User.findByIdAndRemove(req.user.id).then(() => {
		res.sendStatus(200);
	});
});

module.exports = router;
