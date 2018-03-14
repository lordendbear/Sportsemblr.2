import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import initializeDb from './config/db';
import routes from './api';
import config from './config';

let app = express();
app.server = http.createServer(app);

app.use(morgan('dev'));

app.use(cors());

app.use(bodyParser.json({
	limit: config.bodyLimit
}));

const db = initializeDb(config);

// 	// internal middleware
// 	app.use(middleware({ config, db }));

const router = routes({ config, db });

app.use('/api', router);

app.listen(config.port, () => {
	console.log(`Started on port ${config.port}`);
});

export default app;
