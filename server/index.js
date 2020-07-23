const connection = require('./conf');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/me', (req, res) => {
  connection.query('SELECT * from profile', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération du profil')
    } else {
      res.json(results);
    }
  });
});

app.get('/project', (req, res) => {
  connection.query('SELECT * from project', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération du profil')
    } else {
      res.json(results);
    }
  });
});

app.get('/reference', (req, res) => {
  connection.query('SELECT * from reference', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération du profil')
    } else {
      res.json(results);
    }
  });
});

// app.post('/contact')

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});

