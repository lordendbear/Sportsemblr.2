import User from '../users/user.model';
import controllerInit from './auth.controller';
import routerInit from './auth.routes';

export default (config, utils) => {
    const controller = controllerInit(User, utils);

    const router = routerInit(controller);

    return router;
};