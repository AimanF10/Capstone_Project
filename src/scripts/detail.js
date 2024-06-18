import 'regenerator-runtime';
import './components/header';
import './components/footerDetail';
import '../styles/styles.css';
import '../styles/responsive.css';

document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  try {
    const response = await fetch(`https://back-end-capstone-eta.vercel.app/api/wisata/${id}`);
    const wisata = await response.json();
    const detailContainer = document.getElementById('wisata-detail');

    const reviewHTML = Array.isArray(wisata.review)
      ? wisata.review.map((r) => `<div><strong>${r.user}:</strong> ${r.comment} </div>`).join('')
      : '';

    detailContainer.innerHTML = `
          <div class="detail_content" id="wisata-detail">
            <div class="detail">
              <div class="detail_item">
                <div class="wisata_img">
                  <img src="${wisata.image}" alt="${wisata.nama}">
                </div>
                <div class="wisata_detail">
                  <div class="wisata_name">${wisata.nama}</div>
                  <p class="wisata_locate">Lokasi : <span>${wisata.lokasi}</span></p>
                  <p class="wisata_ticket">Tiket : <span>${wisata.tiket}</span></p>
                  <p class="wisata_facility">Fasilitas : <span>${wisata.fasilitas.join(', ')}</span></p>
                  <p class="wisata_rating">Rating: <i class="fas fa-star"></i><span>${wisata.rating}</span></p>
                </div>
              </div>
              <div class="wisata_desc">
                <div class="wisata_text">Deskripsi Wisata :</div>
                <p>${wisata.deskripsi}</p>
                <p>${wisata.deskripsifull}</p>
              </div>
            </div>
            <p><strong>Review:</strong> ${reviewHTML}</p>
            <div class="button-container">
              <button onclick="history.back()">Kembali</button>
            </div>
          </div>
    `;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
