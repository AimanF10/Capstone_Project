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
            <li><a href="#">About Us</a></li>
          </ul>
        </nav>
      `;
    }

    addEventListeners() {
      const hamburger = this.querySelector('#hamburger_logo');
      const navList = this.querySelector('#navigation');

      hamburger.addEventListener('click', () => {
        navList.classList.toggle('nav-list-visible');
      });
    }
  }
  customElements.define('head-bar', HeadBar);
}

// Show the "Back to Top" button when the user scrolls down
window.addEventListener('scroll', () => {
  const backToTopButton = document.querySelector('.btn-back-to-top');
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

// Scroll to the top of the page when the button is clicked with smooth behavior
document.querySelector('.btn-back-to-top').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
