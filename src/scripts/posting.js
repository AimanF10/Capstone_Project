// posting.js
import 'regenerator-runtime';
import './components/header';
import './components/footerDetail';
import '../styles/styles.css';

document.addEventListener('DOMContentLoaded', () => {
  // Perbaiki id form
  const form = document.getElementById('postingForm');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    try {
      const response = await fetch('http://localhost:3000/api/wisata', {
        method: 'POST',
        body: formData,
      });

      const messageElement = document.getElementById('message');
      if (response.ok) {
        messageElement.textContent = 'Data berhasil disimpan!';
      } else {
        messageElement.textContent = 'Gagal menyimpan data.';
      }
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('message').textContent = 'Terjadi kesalahan saat mengirim data.';
    }
  });
});
