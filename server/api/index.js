import { Router } from 'express';

import eventRouterInit from './events'
import userRouterInit from './users'
import placeRouterInit from './place';

export default (app, config, utils) => {
	const router = Router();

	const userRouter = userRouterInit(config, utils);
	router.use('/users', userRouter);

	const eventRouter = eventRouterInit(config);
	router.use('/events', eventRouter);

	const placeRouter = placeRouterInit(config);
	router.use('/places', placeRouter);

	app.use('/api', router);
}
