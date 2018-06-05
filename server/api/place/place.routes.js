import { Router } from 'express';

export default (controller, auth) => {
  const router = new Router();

  router.post('', auth, controller.create);
  router.put('/:id', controller.update);
  router.delete('/:id', controller.delete);

  return router;
}