import config from './config';
import initializeApp from './config/app';

const app = initializeApp(config);

app.listen(config.port, () => {
	console.log(`Started on port ${config.port}`);
});

export default app;
