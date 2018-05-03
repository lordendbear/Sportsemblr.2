import { Router } from 'express';

export default (controller) => {
  const router = new Router();

  router.get('/:id', controller.getById);
  router.delete('/:id', controller.delete);

  return router;
}