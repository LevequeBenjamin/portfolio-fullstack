/* ******************** middleware/auth.middleware ******************** */

// imports
const jwt = require('jsonwebtoken');
const models = require('../models');
require('dotenv').config({ path: '../config/.env' });

// constant
const maxAge = 1 * 24 * 60 * 60 * 1000;
// const parseAuthorization = authorization => {
// 	return authorization != null ? authorization.replace('Bearer ', '') : null;
// };

//* ******************** generateTokenAdmin ******************** *//
exports.generateTokenAdmin = ( isAdmin) => {
	return jwt.sign({ isAdmin }, process.env.JWT_TOKEN_ADMIN, {
		expiresIn: maxAge,
	});
};
//* ******************** generateTokenAdmin end ******************** *//

//* ******************** generateToken ******************** *//
exports.generateToken = ( id) => {
	return jwt.sign({ id }, process.env.JWT_TOKEN, {
		expiresIn: maxAge,
	});
};
//* ******************** generateToken end ******************** *//

//* ******************** requireAuth ******************** *//
exports.requireAuth = async (req, res, next) => {
	const token = req.cookies.jwt;
	if (token) {
		jwt.verify(token, process.env.JWT_TOKEN, async (err, decodedToken) => {
			if (err) {
				console.log(err);
			} else {
				const userId = decodedToken.id;
				req.userId = userId;
				return next();
			}
		});
	} else {
		return res.status(401).json({
			message: 'pas de token !',
		});
	}
};
//* ******************** requireAuth end ******************** *//

//* ******************** checkAdmin ******************** *//
exports.checkAdmin = async (req, res, next) => {
	const token = req.cookies.jwt;
	if (token) {
		jwt.verify(token, process.env.JWT_TOKEN_ADMIN, async (err, decodedToken) => {
			if (err) {
				console.log(err);
			} else {
				const isAdmin = decodedToken.isAdmin;
				console.log(isAdmin)
				return next();
			}
		});
	} else {
		return res.status(401).json({
			message: 'pas de token !',
		});
	}
};
//* ******************** checkAdmin end ******************** *//
