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
        <div class="team-section">
          <div class="foot-title">Our Team</div>
          <div class="team-members">
            <div class="team-member">
              <img src="/images/.......jpg" alt="Ferdiansyah Haryadi" class="team-photo">
              <h3>Ferdiansyah Haryadi</h3>
              <p>Deskripsi singkat tentang anggota tim pertama. Misalnya, latar belakang, peran di tim, dan keahlian.</p>
            </div>
            <div class="team-member">
              <img src="images/Muhammad_Aiman_Nurhakim.jpg" alt="Muhammad Aiman Nurhakim" class="team-photo">
              <h3>Muhammad Aiman Nurhakim</h3>
              <p>Deskripsi singkat tentang anggota tim kedua. Misalnya, latar belakang, peran di tim, dan keahlian.</p>
            </div>
            <div class="team-member">
              <img src="/images/.......jpg" alt="Muhamad Bintang Mandala" class="team-photo">
              <h3>Muhamad Bintang Mandala</h3>
              <p>Deskripsi singkat tentang anggota tim ketiga. Misalnya, latar belakang, peran di tim, dan keahlian.</p>
            </div>
          </div>
        </div>
        </div>
        <div class="foot">
          <p>YGT &#169; 2024, YGTreasure</p>
        </div>
    `;
  }
}

customElements.define('footer-bar', footerBar);
