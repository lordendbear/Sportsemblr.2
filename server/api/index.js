import { Router } from 'express';

import eventRouterInit from './events'
import authRouterInit from './auth'
import userRouterInit from './users'
import placeRouterInit from './place'
import requestRouterInit from './request'
import reviewRouterInit from './review'
import messagesRouterInit from './messages'

export default (app, config, utils, middleware) => {
  const router = Router();

  const eventRouter = eventRouterInit(config, middleware.auth);
  router.use('/events', eventRouter);

  const requestRouter = requestRouterInit(config, middleware.auth);
  router.use('/events', requestRouter);

  const userRouter = userRouterInit(config, utils);
  router.use('/users', userRouter);

  const placeRouter = placeRouterInit(config, middleware.auth);
  router.use('/places', placeRouter);

  const reviewRouter = reviewRouterInit(config, middleware.auth);
  router.use('/events', reviewRouter);

  const authRouter = authRouterInit(config, utils);
  router.use('/login', authRouter);

  const messagesRouter = messagesRouterInit(app, middleware.auth);
  router.use('/events', messagesRouter);

  app.use('/api', router);
}
