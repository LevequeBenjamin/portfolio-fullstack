// ******************** controllers/auth.controller.js ******************** //

// imports
const models = require('../models');
const bcrypt = require('bcrypt');
const { generateToken, generateTokenAdmin } = require('../middleware/auth.middleware');
require('dotenv').config({ path: '../config/.env' });

// const
const maxAge = 1 * 24 * 60 * 60 * 1000;

/* ******************** signup ******************** */
exports.signUp = async (req, res) => {
	const { email, username, password } = req.body;

	// hash le password
	await bcrypt.hash(password, 10).then(async function (hash) {
		try {
			// on crée l'utilisateur
			const user = await models.User.create({
				email,
				username,
				password: hash,
				isAdmin: 0,
			});
			res.status(201).send({ user: user.id });
		} catch (err) {
			res.status(500).send({ err });
		}
	});
};
/* ******************** signup end ******************** */

/* ******************** login ******************** */
// permet de loger un utilisateur
exports.login = async (req, res) => {
	const { email, password } = req.body;

	try {
		// on contrôle si l'email existe dans la bd
		const user = await models.User.findOne({ where: { email: email } });
		if (!user) {
			res.status(200).send({ errorEmail: 'Email inconnu' });
		}
		await bcrypt
			// on compare le password
			.compare(password, user.password)
			.then(valid => {
				if (!valid) {
					res
						.status(200)
						.send({ errorPassword: 'Le mot de passe ne correspond pas' });
				}

				// on crée un token
				if (!user.isAdmin) {
					const token = generateToken(user.id);
					res.cookie('jwt', token, { httpOnly: true, maxAge });
					res.status(200).send({
						user: user.id,
					});
				} else {
					const token = generateTokenAdmin(user.isAdmin);
					res.cookie('jwt', token, { httpOnly: true, maxAge });
					res.status(200).send({
						user: user.id,
					});
				}
			})
			.catch(error => res.status(500).send({ error }));
	} catch (error) {
		res.status(500).send({ error });
	}
};
/* ******************** login end ******************** */

/* ******************** logout ******************** */
// permet à l'utilisateur de se logout
exports.logout = (req, res) => {
	res.cookie('jwt', '', { maxAge: 1 });
	res.redirect('/');
};
/* ******************** logout end ******************** */
