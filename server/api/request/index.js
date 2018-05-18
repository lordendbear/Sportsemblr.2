import dataInit from './request.data';
import controllerInit from './request.controller';
import routerInit from './request.routes'
import Request from './request.model';

export default (config, auth) => {
    const data = dataInit(Request);

    const controller = controllerInit(data);

    const router = routerInit(controller, auth);

    return router;
};