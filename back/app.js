/* ******************** app.js CONTIENT NOTRE APPLICATION ******************** */

// imports
const express = require('express');
const helmet = require('helmet');
const session = require('express-session');
const cors = require('cors');
require('dotenv').config({ path: './config/.env' });

const app = express();

const corsOptions = {
	origin: process.env.CLIENT_URL,
	credentials: true,
	allowedHeaders: ['sessionId', 'Content-Type'],
	exposedHeaders: ['sessionId'],
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	preflightContinue: false,
};
app.use(cors(corsOptions));

// Options pour sécuriser les cookies
const hour = 3 * 24 * 60 * 60 * 1000;
const expiryDate = new Date(Date.now() + hour);
app.set('trust proxy', 1); // trust first proxy
app.use(
	session({
		secret: process.env.SEC_SES,
		name: 'sessionId',
		resave: false,
		saveUninitialized: true,
		cookie: {
			secure: true,
			expires: expiryDate,
		},
	}),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());

module.exports = app;
