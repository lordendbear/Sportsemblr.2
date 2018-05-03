import { Router } from 'express';

export default (controller) => {
  const router = new Router();

  router.delete('/:id', controller.delete);

  return router;
}