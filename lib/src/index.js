'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _controller = require('./controller');var _controller2 = _interopRequireDefault(_controller);
var _router = require('./router');var _router2 = _interopRequireDefault(_router);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var ResourceRouter = function ResourceRouter(model) {
  return (0, _router2.default)(new _controller2.default(model));
};exports.default =

ResourceRouter;
//# sourceMappingURL=index.js.map
