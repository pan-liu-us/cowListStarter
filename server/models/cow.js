const Cow = require('../../database/mongo/index.js')

module.exports = {
  readAll: () => {
    return Cow.find({});
  },

  createOne: (body) => {
    const {name, description} = body;
    return Cow.create({name, description});
  },

  editOne: (id, name, description) => {
    return Cow.findByIdAndUpdate(id, {name, description});
  },

  deleteOne: (id) => {
    return Cow.findByIdAndDelete(id);
  }
}