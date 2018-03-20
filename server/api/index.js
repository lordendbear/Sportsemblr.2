import { Router } from 'express';

import eventRouterInit from './events'
import userRouterInit from './users'

export default (app, config, db) => {
	const router = Router();

	const eventRouter = eventRouterInit(db, config);
	router.use('/events', eventRouter);

	const userRouter = userRouterInit(db, config);
	router.use('/users', userRouter);

	app.use('/api', router);
}
