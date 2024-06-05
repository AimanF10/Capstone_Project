class headBar extends HTMLElement {
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
          <li><a href="#">Posting</a></li>
          <li><a href="#">About Us</a></li>
      </ul>
  </nav>
  `;
  }
}
customElements.define('head-bar', headBar);
