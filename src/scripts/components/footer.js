class footerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
      <div class="card_about">
      <div class="foot-title">About Us</div>
          <p>Yogyakarta Treasures hadir untuk mengungkap "hidden gems" wisata di Daerah Istimewa Yogyakarta.<br> Kami memberikan solusi inovatif bagi wisatawan yang mencari pengalaman unik dan autentik,<br> sambil mendukung ekonomi lokal dan pelestarian lingkungan. Temukan keindahan tersembunyi<br> Daerah Istimewa Yogyakarta bersama kami dan nikmati perjalanan yang tak terlupakan.</p>
          </div>
          <div class="social-media">
              <div class="social-media-item"><i class="fab fa-facebook-f"></i></div>
              <div class="social-media-item"><i class="fab fa-twitter"></i></div>
              <div class="social-media-item"><i class="fab fa-instagram"></i></div>
              <div class="social-media-item"><i class="fab fa-youtube"></i></div>
          </div>
      </div>
      <div class="foot">
          <p> YGT &#169; 2024, YGTreasure</p>
      </div>
    `;
  }
}

customElements.define('footer-bar', footerBar);
