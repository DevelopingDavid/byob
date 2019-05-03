const express = require('express');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/api/v1/series', (request, response) => {
  database('series').select()
    .then((series) => {
      response.status(200).json(series);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

app.get('/api/v1/episodes', (request, response) => {
  database('episodes').select()
    .then((episodes) => {
      response.status(200).json(episodes);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});