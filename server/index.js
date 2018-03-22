import initializeDb from './config/db';
import initializeApi from './api';
import config from './config';
import initializeApp from './config/app';
import initializeUtils from './utils';
import initializePassport from './config/passport';
import initializeAuthMiddleware from './middleware/auth';

const utils = initializeUtils(config);

const passportConfig = initializePassport(config);
const app = initializeApp(config);

const authMiddleware = initializeAuthMiddleware(passportConfig.passport);

const middleware = {
	authMiddleware
}

initializeDb(config);

initializeApi(app, config, utils, middleware);

app.listen(config.port, () => {
	console.log(`Started on port ${config.port}`);
});

export default app;
