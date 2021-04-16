// ******************** utils/cloudinary.js ******************** //

require('dotenv').config({ path: '../config/.env' });
const cloudinary = require('cloudinary').v2;
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.export = cloudinary ;
