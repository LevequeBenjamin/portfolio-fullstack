/* ******************** app.js CONTIENT NOTRE APPLICATION ******************** */

// imports
const express = require('express');
const helmet = require('helmet');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
const { requireAuth } = require('./middleware/auth.middleware');
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
app.use(cookieParser());

app.use(helmet());

// jwt
app.get('*', requireAuth);
app.get('/jwtid', requireAuth, (req, res) => {
	res.status(200).json(req.userId);
});

// routes
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);

module.exports = app;
