const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model');
const { validatePassword } = require('../lib/passwordUtils');

// const verifyFunction =

const strategy = new LocalStrategy(
	{ usernameField: 'email', passwordField: 'password' },
	(email, password, done) => {
		User.findOne({ email }, (err, user) => {
			if (err) return done(err);

			if (!user) return done(null, false);

			if (validatePassword(password, user.hash, user.salt))
				return done(null, user);

			return done(null, false);
		});
	}
);

passport.use(strategy);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		if (err) return done(err);
		done(null, user);
	});
});
