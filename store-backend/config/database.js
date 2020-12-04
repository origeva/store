const mongoose = require('mongoose');

const uri = process.env.ATLAS_URI;

mongoose.set('useFindAndModify', false); // uses findOneAndUpdate instead of deprecated findAndModify
mongoose.set('returnOriginal', false); // return object after update instead of the original

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.catch((err) => console.error(err));

const connection = mongoose.connection;

connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});

module.exports = connection;
