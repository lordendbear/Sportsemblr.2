import dataInit from './review.data';
import controllerInit from './review.controller';
import routerInit from './review.routes'
import Review from './review.model';

export default (config, auth) => {
  const data = dataInit(Review);

  const controller = controllerInit(data);

  const router = routerInit(controller, auth);

  return router;
};