import { Router } from 'express';

export default (controller, auth) => {
  const router = new Router();

  router.post('/:id/reviews', auth, controller.create);

  return router;
}