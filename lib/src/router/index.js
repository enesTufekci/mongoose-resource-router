'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _express = require('express');

var ResourceRouter = function ResourceRouter(controller) {
  var router = (0, _express.Router)();

  router.route('/').
  get(controller.list);

  router.route('/:id').

  get(controller.get).


  put(controller.update).


  delete(controller.remove);


  router.param('id', controller.load);

  return router;
};exports.default =


ResourceRouter;
//# sourceMappingURL=index.js.map
