const express = require('express');
const app = express();
const port = 8081;

const knex = require('knex')(require('../knexfile.js')['development']);

app.get('/', (request, response) => {
  response.send('Application up');
})

app.listen(port, () => {
  console.log('Application running');
})

app.get('/pets', (request, response) => {
  knex('pet')
    .select('*')
    .then(pets => {
      let petNames = pets.map(pet => pet.name);
      response.json(petNames);
    })
})