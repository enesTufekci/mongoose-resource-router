"use strict";Object.defineProperty(exports, "__esModule", { value: true });function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var ResourceController =
function ResourceController(model) {var _this = this;_classCallCheck(this, ResourceController);this.



  load = function (req, res, next, id) {
    _this.model.load(id).then(function (item) {
      res.item = item;
      return next();
    }).catch(function (e) {return next(e);});
  };this.

  list = function (req, res, next) {var _req$query =
    req.query,_req$query$limit = _req$query.limit,limit = _req$query$limit === undefined ? 50 : _req$query$limit,_req$query$skip = _req$query.skip,skip = _req$query$skip === undefined ? 0 : _req$query$skip;
    _this.model.list({ limit: limit, skip: skip }).
    then(function (items) {return res.json(items);}).
    catch(function (e) {return next(e);});
  };this.

  get = function (req, res, err) {
    _this.model.get(req.params.id).
    then(function (item) {return res.json(item);}).
    catch(function (e) {return res.send(err);});
  };this.

  store = function (req, res) {
    var Model = _this.model;
    var item = new Model(req.body);

    item.save().
    then(function (savedItem) {return res.json(savedItem);}).
    catch(function (e) {return next(e);});
  };this.

  update = function () {

  };this.

  remove = function () {

  };this.model = model;};exports.default = ResourceController;
//# sourceMappingURL=index.js.map
