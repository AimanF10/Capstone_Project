import 'regenerator-runtime';
import './components/header';
import './components/footerDetail';
import '../styles/styles.css';
import '../styles/responsive.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('postingForm');
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    submitButton.disabled = true;

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

      const popup = document.getElementById('popup');
      const popupMessage = document.getElementById('popupMessage');
      const closePopupButton = document.getElementById('closePopup');

      if (response.ok) {
        popupMessage.textContent = 'Data berhasil disimpan!';
      } else {
        popupMessage.textContent = 'Gagal menyimpan data.';
      }

      popup.style.display = 'block';
      // eslint-disable-next-line func-names
      closePopupButton.onclick = function () {
        popup.style.display = 'none';
      };

      // eslint-disable-next-line no-shadow, func-names
      window.onclick = function (event) {
        if (event.target === popup) {
          popup.style.display = 'none';
        }
      };
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('popupMessage').textContent = 'Terjadi kesalahan saat mengirim data.';
      document.getElementById('popup').style.display = 'block';
    } finally {
      submitButton.disabled = false;
    }
  });
});
