import { Router } from 'express';

export default (controller) => {
  const router = new Router();

  router.post('', controller.create);
  router.get('', controller.getAll);
  router.put('/:id', controller.update);
  router.get('/:id', controller.getProfile);
  router.delete('/:id', controller.delete);

  return router;
}