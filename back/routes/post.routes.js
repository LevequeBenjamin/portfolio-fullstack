// ******************** routes/post.routes.js ******************** //

// imports
const router = require('express').Router();
const postController = require('../controllers/post.controller');
const { checkAdmin } = require('../middleware/auth.middleware');
require('dotenv').config({ path: '../config/.env' });
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
	cloudinary: cloudinary,
});

const parser = multer({ storage: storage });

// routes
router.get('/', postController.readPost);
router.get('/read-one-post/:id', postController.readOnePost);
router.post('/', checkAdmin, parser.single('file'), postController.createPost);
router.put('/:id', checkAdmin, postController.updatePost);
router.delete('/:id', checkAdmin, postController.deletePost);

// exports
module.exports = router;
