import { Router } from 'express';

export default (controller) => {
  const router = new Router();

  router.put('/:id', controller.update);
  router.delete('/:id', controller.delete);

  return router;
}