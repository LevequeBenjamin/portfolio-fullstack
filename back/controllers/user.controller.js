// ******************** controllers/user.controller.js ******************** //

// imports
const models = require('../models');
const bcrypt = require('bcrypt');

/* ******************** getUser ******************** */
// permet de récuperer un utilisateur dans la bd
exports.getUser = async (req, res) => {
	try {
		const user = await models.User.findOne({
			attributes: [
				'id',
				'email',
				'username',
				'isAdmin',
				'createdAt',
				'updatedAt',
			],
			where: { id: req.params.id },
		});

		if (user) {
			res.status(200).send(user);
		} else {
			res.status(404).send({ error: 'user ' + req.params.id + ' not found !' });
		}
	} catch (error) {
		res.status(500).send({ error });
	}
};
/* ******************** getUser end ******************** */

/* ******************** getAllUsers ******************** */
// permet de récupérer tous les utilisateurs dans la bd
exports.getAllUsers = async (req, res) => {
	try {
		const user = await models.User.findAll({
			attributes: [
				'id',
				'email',
				'username',
				'isAdmin',
				'createdAt',
				'updatedAt',
			],
		});
		if (user) {
			res.status(200).send(user);
		} else {
			res.status(404).send({ error: 'users not found !' });
		}
	} catch (error) {
		res.status(500).send({ error });
	}
};
/* ******************** getAllUsers end ******************** */

/* ******************** deleteUser ******************** */
// permet de supprimer un utilisateur
exports.deleteUser = async (req, res) => {
	const password = req.body.password;
	const user = await models.User.findOne({ where: { id: req.params.id } });

	try {
		await bcrypt
			// on compare le password
			.compare(password, user.password)
			.then(valid => {
				if (!valid) {
					res
						.status(200)
						.json({ errorPassword: 'Le mot de passe ne correspond pas' });
				} else {
					user
						.destroy()
						.then(
							res.status(200).send({
								message: 'user ' + req.params.id + ' supprimé !',
							}),
						)
						.catch(error => res.status(400).send({ error }));
				}
			})
			.catch(error => res.status(500).send({ error }));
	} catch (error) {
		res.status(500).send({ error });
	}
};
/* ******************** deleteUser end ******************** */
