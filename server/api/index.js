import { Router } from 'express';

import eventRouterInit from './events'

export default (app, config, db) => {
	const router = Router();

	const eventRouter = eventRouterInit(db, config);
	router.use('/events', eventRouter);

	app.use('/api', router);
}
