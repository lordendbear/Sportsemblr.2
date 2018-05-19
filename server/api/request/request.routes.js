import { Router } from 'express';

export default (controller, auth) => {
  const router = new Router();

  router.post('/:id/requests', auth, controller.create);
  router.put('/:id/requests/:requestId', auth, controller.respondToRequest);

  return router;
}