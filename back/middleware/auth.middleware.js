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

//* ******************** generateToken ******************** *//
exports.generateToken = id => {
	return jwt.sign({ id }, process.env.JWT_TOKEN, {
		expiresIn: maxAge,
	});
};
//* ******************** generateToken end ******************** *//

//* ******************** requireAuth ******************** *//
exports.requireAuth = async (req, res, next) => {
	//let authorization = req.headers['authorization'];
	//const token = parseAuthorization(authorization);
	const token = req.cookies.jwt;
	if (token) {
		jwt.verify(token, process.env.JWT_TOKEN, async (err, decodedToken) => {
			if (err) {
				console.log(err);
			} else {
				const userId = decodedToken.id;
				let user = await models.User.findOne({
					Where: { id: userId },
				});
				if (user) {
					req.userId = user.id;
					console.log(user.id);
					return next();
				} else {
					console.log('User ID non valable !');
				}
			}
		});
	} else {
		console.log('pas de token !');
	}
};
//* ******************** requireAuth end ******************** *//
