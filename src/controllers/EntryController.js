const Entry = require('./../models/Entry');

module.exports = {
  async store(req, res) {
    const {title} = req.body;
    const entry = await Entry.create({
      title,
    });

    return res.json(entry);
  },

  async index(req, res) {
    const entries = await Entry.find();
    return res.json(entries);
  },

  async destroy(req, res) {
    const {id} = req.params;
    await Entry.remove({
      _id: id,
    }, err => {
      if(err) {
        return res.json(err);
      }else {
        return res.status(204).send();
      }
    })
  }
}
