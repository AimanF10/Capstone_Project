import 'regenerator-runtime';
import './components/header';
import './components/footerDetail';
import '../styles/styles.css';

document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const response = await fetch(`http://localhost:3000/api/wisata/${id}`);
  const wisata = await response.json();

  const detailContainer = document.getElementById('wisata-detail');
  detailContainer.innerHTML = `
    <div>
      <h2>${wisata.nama}</h2>
      <img src="${wisata.image}" alt="${wisata.nama}" style="width:400px;">
      <p><strong>Deskripsi:</strong>${wisata.deskripsifull}</p>
      <p><strong>Lokasi:</strong> ${wisata.lokasi}</p>
      <p><strong>Tiket:</strong> ${wisata.tiket}</p>
      <p><strong>Fasilitas:</strong> ${wisata.fasilitas.join(', ')}</p>
      <p><strong>Review:</strong> ${wisata.review.map((r) => `<div><strong>${r.user}:</strong> ${r.comment}</div>`).join('')}</p>
      <div>
        <button id="back-button">Kembali</button>
      </div>
    </div>
  `;

  document.getElementById('back-button').addEventListener('click', () => {
    window.history.back();
  });
});
