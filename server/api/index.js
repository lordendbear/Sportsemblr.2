import { Router } from 'express';

import eventRouterInit from './events'
import authRouterInit from './auth'
import userRouterInit from './users'

export default (app, config, utils) => {
	const router = Router();

	const eventRouter = eventRouterInit(config);
	router.use('/events', eventRouter);

	const userRouter = userRouterInit(config, utils);
	router.use('/users', userRouter);

	const authRouter = authRouterInit(config, utils);
	router.use('/login', authRouter);

	app.use('/api', router);
}
