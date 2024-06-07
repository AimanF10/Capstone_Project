const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/wisata', (req, res) => {
  fs.readFile(path.join(__dirname, 'data', 'wisata.json'), 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading data');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.get('/api/wisata/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  fs.readFile(path.join(__dirname, 'data', 'wisata.json'), 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading data');
    } else {
      const wisata = JSON.parse(data).find((w) => w.id === id);
      if (wisata) {
        res.json(wisata);
      } else {
        res.status(404).send('Wisata not found');
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
