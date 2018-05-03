import { Router } from 'express';

import eventRouterInit from './events'
import authRouterInit from './auth'
import userRouterInit from './users'
import placeRouterInit from './place'

export default (app, config, utils, middleware) => {
  const router = Router();

  const eventRouter = eventRouterInit(config);
  router.use('/events', eventRouter);

  const userRouter = placeRouterInit(config, utils);
  router.use('/users', userRouter);

  const placeRouter = userRouterInit(config, utils);
  router.use('/places', placeRouter);

  const authRouter = authRouterInit(config, utils);
  router.use('/login', authRouter);

  app.use('/api', router);
}
