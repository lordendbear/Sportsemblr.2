import { Router } from 'express';

export default (controller, auth) => {
  const router = new Router();

  router.get('/:id/messages', auth, controller.getMessages);
  router.delete('/:id/messages/:messageId', auth, controller.deleteMessage);

  return router;
}