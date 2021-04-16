// ******************** controllers/post.controller.js ******************** //

// imports
const models = require('../models');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

/* ******************** createPost ******************** */
exports.createPost = async (req, res) => {
	let { title, content, video, lienGithub, date, stack } = req.body;
	let userId = req.userId;

	try {
		await models.Post.create({
			title: title,
			content: content,
			imageUrl: req.file.path,
			UserId: userId,
			video: video,
			lienGithub: lienGithub,
			stack: stack,
			date: date,
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

		if (post) {
			await cloudinary.uploader.destroy(post.imageUrl)
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
