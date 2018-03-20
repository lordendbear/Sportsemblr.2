import { Router } from 'express';

import eventRouterInit from './events'
import userRouterInit from './users'

export default (app, config, utils) => {
	const router = Router();

	const eventRouter = eventRouterInit(config);
	router.use('/events', eventRouter);

	const userRouter = userRouterInit(config, utils);
	router.use('/users', userRouter);

	app.use('/api', router);
}
