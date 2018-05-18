import { Router } from 'express';

export default (controller) => {
  const router = new Router();

  router.get('/active', controller.getActive);
  router.post('', controller.create);
  router.put('/:id', controller.update);
  router.get('/:id', controller.details);
  router.delete('/:id', controller.delete);
  router.get('', controller.getAll);

  return router;
}