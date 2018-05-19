import dataInit from './event.data';
import controllerInit from './event.controller';
import routerInit from './event.routes'
import Event from './event.model';

export default (config, auth) => {
    const data = dataInit(Event);

    const controller = controllerInit(data);

    const router = routerInit(controller, auth);

    return router;
};