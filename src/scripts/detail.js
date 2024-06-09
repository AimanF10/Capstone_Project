import 'regenerator-runtime';
import './components/header';
import './components/footerDetail';
import '../styles/styles.css';

document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  try {
    const response = await fetch(`http://localhost:3000/api/wisata/${id}`);
    const wisata = await response.json();
    const detailContainer = document.getElementById('wisata-detail');

    const reviewHTML = Array.isArray(wisata.review)
      ? wisata.review.map((r) => `<div><strong>${r.user}:</strong> ${r.comment}</div>`).join('')
      : '';

    detailContainer.innerHTML = `
      <h2>${wisata.nama}</h2>
      <img src="${wisata.image}" alt="${wisata.nama}" style="width:400px;">
      <p>${wisata.deskripsi}</p>
      <p>${wisata.deskripsifull}</p>
      <p><strong>Lokasi:</strong> ${wisata.lokasi}</p>
      <p><strong>Tiket:</strong> ${wisata.tiket}</p>
      <p><strong>Fasilitas:</strong> ${wisata.fasilitas.join(', ')}</p>
      <p><strong>Review:</strong> ${reviewHTML}</p>
      <button onclick="history.back()">Kembali</button>
    `;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
