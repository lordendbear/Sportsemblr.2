import { Router } from 'express';

export default (controller) => {
  const router = new Router();


  router.post('', controller.create);
  router.put('/:id', controller.update);
  router.get('/:id', controller.getProfile);

  return router;
}