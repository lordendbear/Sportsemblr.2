import dataInit from './event.data';
import controllerInit from './event.controller';
import routerInit from './event.routes'
import Event from './event.model';

export default (config) => {
    const data = dataInit(Event);

    const controller = controllerInit(data);

    const router = routerInit(controller);

    return router;
};