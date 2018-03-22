import dataInit from './place.data';
import controllerInit from './place.controller';
import routerInit from './place.routes'
import Place from './place.model';

export default (config) => {
    const data = dataInit(Place);

    const controller = controllerInit(data);

    const router = routerInit(controller);

    return router;
};