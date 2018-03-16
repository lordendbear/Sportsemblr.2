import dataInit from './event.data';
import controllerInit from './event.controller';
import routerInit from './event.routes'

export default (db, config) => {
    const data = dataInit(db);

    const controller = controllerInit(data);

    const router = routerInit(controller);

    return router;
};