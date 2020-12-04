require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const connection = require('./config/database');
// const passport = require('passport');
const cors = require('cors');

connection.once('open', () => {
	app.listen(port, () => console.log(`Server is running on port ${port}`));
});

app.use(cors());

// app.use((req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.header('Access-Control-Allow-Headers', '*');

// 	if (req.method === 'OPTIONS') {
// 		res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
// 		res.status(204).json();
// 	}
// 	next();
// });

app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: true,
		store: new MongoStore({
			mongooseConnection: connection,
			collection: 'sessions',
		}),
		unset: 'destroy', // test 'keep' later on
		cookie: { maxAge: 1000 * 60 * 60 },
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

////////////////////////////////////////

// require('./config/passport');
// app.use(passport.initialize());
// app.use(passport.session()); // has to be after express-session

////////////////////////////////////////

app.use((req, res, next) => {
	console.log(req.session);
	next();
});

////////////////////////////////////////

const authRouter = require('./routes/auth.router');
app.use('/auth', authRouter);

const coffeeRouter = require('./routes/coffee.router');
app.use('/coffee', coffeeRouter);

const accountRouter = require('./routes/account.router');
app.use('/account', accountRouter);

const productsRouter = require('./routes/products.router');
app.use('/products', productsRouter);

const adminRouter = require('./routes/admin.router');
app.use('/admin', adminRouter);

app.use(express.static('./public'));

////////////////////////////////////////
