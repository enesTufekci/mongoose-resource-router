import ResourceController from './controller';
import Router from './router';

const ResourceRouter = (model) => {
  return Router(new ResourceController(model));
}

export default ResourceRouter;