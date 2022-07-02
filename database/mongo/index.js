const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cowList', (err)=>{
  if(err) {
    console.log(err);
    return;
  }
  console.log('connected to mongo')
});

const cowSchema = new mongoose.Schema({
  name: {type: String, unique: true},
  description: String
})

const Cow = mongoose.model('Cow', cowSchema);

module.exports = Cow;