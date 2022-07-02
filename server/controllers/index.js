const Cow = require('../../database/mongo/index.js')

module.exports = {
  readAll: () => {
    return Cow.find({});
  },

  createOne: (body) => {
    const {name, description} = body;
    Cow.create({name, description});
    const all = Cow.find({});
    return all;
  },

  editOne: (id, name, description) => {
    return Cow.findOneAndUpdate(id, {name: name, description: description});
  },

  deleteOne: (id) => {
    return Cow.findByIdAndDelete(id);
  }
}