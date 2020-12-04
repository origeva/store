const router = require('express').Router();
const passport = require('passport');
const User = require('../models/user.model');
const { generateHash } = require('../lib/passwordUtils');

const handleErrors = (err) => {
	if (err.code === 11000) {
		return { email: 'Email already in use.' };
	}
	let errors = {};
	Object.values(err.errors).forEach((val) => {
		errors[val.path] = val.message;
	});
	console.log(errors);
	return errors;
};

// const addErrors = (err1, err2) => {
// 	return { ...err1, ...err2 };
// };

router.post('/login', passport.authenticate('local'), (req, res) => {
	console.log(req.user);
	res.status(202).json(req.user.account);
});

router.post('/logout', (req, res) => {
	req.logout();
	res.sendStatus(200);
});

router.post('/register', async (req, res) => {
	try {
		const { email, password } = req.body;
		if (password.length < 6) {
			throw {
				errors: {
					password: {
						path: 'password',
						message: 'Password must be at least 6 characters long.',
					},
				},
			};
		}
		const { hash, salt } = generateHash(password);
		let user = await User.create({ email, hash, salt });
		res.sendStatus(201);
	} catch (err) {
		console.log(err);
		res.status(400).json({ err: handleErrors(err) });
	}
});

router.get('/protected', passport.authenticate('local'), (req, res) => {
	console.log('Protected:', req.isAuthenticated());
	res.sendStatus(200);
});

router.get('/test', passport.authenticate('local'), (req, res) => {
	console.log('Test:'.req.isAuthenticated());
	res.sendStatus(200);
});

module.exports = router;
