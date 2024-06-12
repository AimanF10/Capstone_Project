const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '../src/public/images')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../src/public/images/wisata');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`);
  },
});

const upload = multer({ storage });

const wisataFilePath = path.join(__dirname, 'data', 'wisata.json');

app.get('/api/wisata', (req, res) => {
  fs.readFile(wisataFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    let wisataData;
    try {
      wisataData = JSON.parse(data);
    } catch (parseErr) {
      console.error('Error parsing JSON:', parseErr);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.json(wisataData);
  });
});

app.get('/api/wisata/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  fs.readFile(wisataFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    let wisataData;
    try {
      wisataData = JSON.parse(data);
    } catch (parseErr) {
      console.error('Error parsing JSON:', parseErr);
      res.status(500).send('Internal Server Error');
      return;
    }

    const wisata = wisataData.find((w) => w.id === id);
    if (!wisata) {
      res.status(404).send('Wisata not found');
    } else {
      res.json(wisata);
    }
  });
});

app.post('/api/wisata', upload.single('image'), (req, res) => {
  const {
    nama, deskripsi, deskripsifull, lokasi, tiket, fasilitas, review, rating,
  } = req.body;
  const image = req.file ? req.file.filename : '';

  // Pemeriksaan apakah semua field telah diisi
  // eslint-disable-next-line max-len
  if (!nama || !deskripsi || !deskripsifull || !lokasi || !tiket || !fasilitas || !review || !image || !rating) {
    res.status(400).send('Semua field harus diisi');
    return;
  }

  // Membaca data dari file JSON
  fs.readFile(wisataFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    let existingData;
    try {
      existingData = JSON.parse(data);
    } catch (parseErr) {
      console.error('Error parsing JSON:', parseErr);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Pemeriksaan apakah data sudah ada
    const existingWisata = existingData.find((w) => w.nama === nama);
    if (existingWisata) {
      res.status(400).send('Data sudah ada');
      return;
    }

    // Menambahkan data baru
    const newId = existingData.length > 0 ? existingData[existingData.length - 1].id + 1 : 1;
    const newWisata = {
      id: newId,
      nama,
      image: `/images/wisata/${image}`,
      deskripsi,
      deskripsifull,
      lokasi,
      tiket,
      fasilitas: fasilitas.split(',').map((f) => f.trim()),
      review: JSON.parse(review),
      rating: parseFloat(rating),
    };

    existingData.push(newWisata);

    // Menyimpan data ke dalam file JSON
    // eslint-disable-next-line no-shadow
    fs.writeFile(wisataFilePath, JSON.stringify(existingData, null, 2), (err) => {
      if (err) {
        console.error('Error writing JSON file:', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      res.status(201).send('Data berhasil disimpan');
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
