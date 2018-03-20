import dataInit from './user.data';
import controllerInit from './user.controller';
import routerInit from './user.routes'
import User from './user.model';

export default (config) => {
    const data = dataInit(User);

    const controller = controllerInit(data);

    const router = routerInit(controller);

    return router;
};