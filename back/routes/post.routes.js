/* ******************** routes/post.routes.js ******************** */

// imports
const router = require('express').Router();
const postController = require('../controllers/post.controller');
const multer = require('multer');
const upload = multer();
const { requireAuth } = require('../middleware/auth.middleware');

// routes
router.get('/', postController.readPost);
router.get('/read-one-post/:id', postController.readOnePost);
router.post('/', upload.single('file'), requireAuth, postController.createPost);
router.put('/:id', requireAuth, postController.updatePost);
router.delete('/:id', requireAuth, postController.deletePost);

// exports
module.exports = router;



