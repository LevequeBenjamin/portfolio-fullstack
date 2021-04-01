// ******************** controllers/post.controller.js ******************** //

// imports
const models = require('../models');
const fs = require('fs');
const { promisify } = require('util');
const pipeline = promisify(require('stream').pipeline);

/* ******************** createPost ******************** */
exports.createPost = async (req, res) => {
	let { content, video, lienGithub } = req.body;
	let userId = req.userId;

	let filename;

	if (req.file != null) {
		filename = userId + Date.now() + '.jpg';

		await pipeline(
			req.file.stream,
			fs.createWriteStream(`${__dirname}/../uploads/posts/${filename}`),
		);
	}

	try {
		await models.Post.create({
			content: content,
			imageUrl: req.file != null ? './uploads/posts/' + filename : '',
			UserId: userId,
			video: video,
			lienGithub: lienGithub,
		})
			.then(newPost => res.status(201).send({ newPost }))
			.catch(error => res.status(400).send({ error }));
	} catch (error) {
		return res.status(500).send({ error });
	}
};
/* ******************** createPost end ******************** */

/* ******************** readPost ******************** */
exports.readPost = async (req, res) => {
	try {
		const posts = await models.Post.findAll({
			order: [['createdAt', 'DESC']],
			include: [
				{
					model: models.User,
					attributes: ['username'],
				},
			],
		});
		if (posts) {
			res.status(200).send(posts);
		} else {
			res.status(404).send({ error: 'aucun post trouvé' });
		}
	} catch (error) {
		res.status(500).send({ error });
	}
};
/* ******************** readPost end ******************** */

/* ******************** readOnePost ******************** */
exports.readOnePost = async (req, res) => {
	let postId = req.params.id;
	try {
		const post = await models.Post.findOne({
			include: [
				{
					model: models.User,
					attributes: ['username'],
				},
			],
			where: { id: postId },
		});
		if (post) {
			res.status(200).send(post);
		} else {
			res.status(404).send({ error: 'aucun message trouvé' });
		}
	} catch (error) {
		res.status(500).send({ error });
	}
};
/* ******************** readOnePost end ******************** */

/* ******************** updatePost ******************** */
exports.updatePost = async (req, res) => {
	let content = req.body;
	let postId = req.params.id;

	try {
		const post = await models.Post.findOne({
			where: { id: postId },
		});

		await post
			.update({
				content: content,
			})
			.then(res.status(200).send({ post }))
			.catch(error => res.status(400).send({ error }));
	} catch (error) {
		res.status(500).send({ error });
	}
};
/* ******************** updatePost end ******************** */

/* ******************** deletePost ******************** */
exports.deletePost = async (req, res) => {
	let postId = req.params.id;

	try {
		const post = await models.Post.findOne({
			where: { id: postId },
		});
		let filename = post.dataValues.imageUrl.split('/uploads/')[1];
		if (filename !== undefined) {
			fs.unlink(`${__dirname}/../uploads/${filename}`, function (err) {
				if (err) {
					console.log('error');
				} else {
					console.log('fichier supprimé');
				}
			});
		}

		if (post) {
			await post
				.destroy()
				.then(res.status(200).send({ message: 'post supprimé !' }))
				.catch(error => res.status(400).send({ error }));
		} else {
			res.status(400).send({ error: 'post non trouvé' });
		}
	} catch (error) {
		res.status(500).send({ error });
	}
};
/* ******************** deletePost end ******************** */
