import { Router } from 'express';

export default (controller) => {
  const router = new Router();

  router.get('/:id', controller.details);
  router.delete('/:id', controller.delete);

  return router;
}