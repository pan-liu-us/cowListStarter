const express = require('express');
const path = require('path');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const Cow = require('./controllers/index.js')

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));


app.get('/', (req, res) => {
  res.send('Hello from the server!');
})

app.get('/api/cows', (req, res) => {
  Cow.readAll()
  .then((data) => {
    res.json(data)
    res.status(200).end()
  })
  .catch(err => console.log(err))
})

app.post('/api/cows', (req, res) => {
  Cow.createOne(req.body)
  .then(data => {
    Cow.readAll()
      .then(result => res.status(201).json(result))
      .catch(err => res.status(400).send(err))
  })
  .catch(() => res.status(400).end('Unable to save your cow :('))
})

app.put('/api/cows/:id', (req, res) => {
  Cow.editOne(req.params.id, req.body.name, req.body.description )
  .then(data => {
    Cow.readAll()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(400).send(err))
  })
  .catch(() => res.status(404).end('Unable to update the record :('))
})

app.delete('/api/cows/:id', (req, res) => {
  Cow.deleteOne(req.params.id)
  .then(data =>  {
    Cow.readAll()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(400).send(err))
  })
  .catch(() => res.status(404).end(`Unable to delete the record :(`))
})


let db;
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
    readline.question(`Choose your db: (mongo or mysql)\n>>>>>`, choice=>{
      if(choice==='mongo') {
        console.log('Your db is Mongo');
        db = require('../database/mongo');
      } else if(choice === 'mysql') {
        console.log('Your db is mysql');
        db = require('../database/mysql');
      } else {
        console.log('Stop node, restart and try again, valid options are mysql and mongo')
      }
    })

});
