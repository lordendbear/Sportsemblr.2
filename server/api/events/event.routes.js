import { Router } from 'express';

export default (controller) => {
  const router = new Router();

  router.post('', controller.create);
  router.get('/:id', controller.details);
  router.delete('/:id', controller.delete);

  return router;
}