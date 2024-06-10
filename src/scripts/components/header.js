// Periksa apakah elemen kustom sudah ada sebelumnya sebelum mendefinisikannya
if (!customElements.get('head-bar')) {
  class HeadBar extends HTMLElement {
    connectedCallback() {
      this.render();
      this.addEventListeners();
    }

    render() {
      this.innerHTML = `
        <p class="name">YG Treasure</p>
        <button type="button" id="hamburger_logo" aria-label="navigation-menu" tabindex="0">☰</button>
        <nav>
          <ul id="navigation" class="nav-list">
            <li><a href="index.html">Home</a></li>
            <li><a href="posting.html">Posting</a></li>
            <li><a href="footer.js">About Us</a></li>
          </ul>
        </nav>
      `;
    }

    addEventListeners() {
      const hamburger = this.querySelector('#hamburger_logo');
      const navList = this.querySelector('#navigation');

      if (hamburger && navList) {
        hamburger.addEventListener('click', () => {
          navList.classList.toggle('nav-list-visible');
        });
      } else {
        console.error('Hamburger or navigation list not found');
      }
    }
  }
  customElements.define('head-bar', HeadBar);
}

document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.querySelector('.btn-back-to-top');
  if (backToTopButton) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    });

    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  } else {
    console.error('Back to Top button not found');
  }
});
