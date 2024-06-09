import 'regenerator-runtime';
import './components/header';
import './components/footerDetail';
import '../styles/styles.css';
import '../styles/responsive.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('postingForm');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const reviewData = [{
      user: formData.get('user'),
      comment: formData.get('comment'),
    }];
    formData.append('review', JSON.stringify(reviewData));

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
