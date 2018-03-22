import { Router } from 'express';

export default (controllers) => {
    const router = new Router();

    router.post('', controllers.login);

    return router;
}