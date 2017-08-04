import { Router } from 'express';

const ResourceRouter = (controller) => {
  let router = Router();
  
  router.route('/')
  .get(controller.list);

  router.route('/:id')

    .get(controller.get)


    .put(controller.update)


    .delete(controller.remove);


  router.param('id', controller.load);

  return router;
}


export default ResourceRouter;