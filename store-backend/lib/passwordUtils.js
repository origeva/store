const crypto = require('crypto');

const generateHash = (password) => {
	const salt = crypto.randomBytes(32).toString('hex');
	const hash = crypto
		.pbkdf2Sync(password, salt, 10000, 64, 'sha512')
		.toString('hex');
	return { salt, hash };
};

const validatePassword = (password, hash, salt) => {
	return (
		hash ===
		crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')
	);
};

exports.generateHash = generateHash;
exports.validatePassword = validatePassword;
