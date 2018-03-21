import dataInit from './user.data';
import controllerInit from './user.controller';
import routerInit from './user.routes'
import User from './user.model';

export default (config, utils) => {
    const data = dataInit(User, utils);

    const controller = controllerInit(data);

    const router = routerInit(controller);

    return router;
};