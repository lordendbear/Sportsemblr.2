import initializeDb from './config/db';
import initializeApi from './api';
import config from './config';
import app from './config/app';
import utils from './utils';

initializeDb(config);

initializeApi(app, config, utils);

app.listen(config.port, () => {
	console.log(`Started on port ${config.port}`);
});

export default app;
