export default class ResourceController {
  constructor(model){
    this.model = model;
  }
  
  load = (req, res, next, id) => {
    this.model.load(id).then(item => {
      res.item = item;
      return next();
    }).catch(e => next(e));
  }

  list = (req, res, next) => {
    const { limit = 50, skip = 0 } = req.query;
    this.model.list({ limit, skip })
      .then(items => res.json(items))
      .catch(e => next(e));
  }

  get = (req, res, err) => {
    this.model.get(req.params.id)
      .then(item => res.json(item))
      .catch(e => res.send(err));
  }

  store = (req, res) => {
    let Model = this.model;
    let item = new Model(req.body);

    item.save()
      .then(savedItem => res.json(savedItem))
      .catch(e => next(e));
  }

  update = () => {

  }

  remove = () => {

  }
}