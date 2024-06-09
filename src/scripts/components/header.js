// Periksa apakah elemen kustom sudah ada sebelumnya sebelum mendefinisikannya
if (!customElements.get('head-bar')) {
  class HeadBar extends HTMLElement {
    connectedCallback() {
      this.render();
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
  }
  customElements.define('head-bar', HeadBar);
}
