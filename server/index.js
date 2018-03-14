import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import initializeDb from './config/db';
import middleware from './middleware';
import api from './api';
import config from './config.json';

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit: config.bodyLimit
}));

//const db = initializeDb(config);

// connect to db
// initializeDb(db => {

// 	// internal middleware
// 	app.use(middleware({ config, db }));

// 	// api router
// 	const router = api({ config, db });

// 	app.use('/api', router);

// 	app.server.listen(process.env.PORT || config.port, () => {
// 		console.log(`Started on port ${app.server.address().port}`);
// 	});
// });

app.listen(config.port, () => {
	console.log(`Started on port ${config.port}`);
});

export default app;
