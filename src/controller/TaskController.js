const Task = require("../model/Task");

module.exports = {
  async index(req, res) {
    const task = await Task.findAll();
    return res.json(task);
  },

  async create(req, res) {
    const { title, description } = req.body;
    const task = await Task.create({ title, description });
    return res.json(task);
  },

  async delete(req, res) {
    const { id } = req.params;
    const task = await Task.destroy({
      where: { id: id },
    });
    return res.json(task);
  },

  async update(req, res) {
    const { id, title, description } = req.body;
    const task = await Task.update(
      { title, description },
      { where: { id: id } }
    );
    return res.json(task);
  },
};
