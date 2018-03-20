import dataInit from './user.data';
import controllerInit from './user.controller';
import routerInit from './user.routes'

export default (db, config) => {
    const data = dataInit(db);

    const controller = controllerInit(data);

    const router = routerInit(controller);

    return router;
};