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
  }
}