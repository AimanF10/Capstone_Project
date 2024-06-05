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
      </div>
      <div class="team">
      <div class="foot-title">Our Team</div>
      <div class="team-member">
        <h3>Member 1</h3>
        <p>Deskripsi singkat tentang anggota tim pertama. Misalnya, latar belakang, peran di tim, dan keahlian.</p>
      </div>
      <div class="team-member">
        <h3>Member 2</h3>
        <p>Deskripsi singkat tentang anggota tim kedua. Misalnya, latar belakang, peran di tim, dan keahlian.</p>
      </div>
      <div class="team-member">
        <h3>Member 3</h3>
        <p>Deskripsi singkat tentang anggota tim ketiga. Misalnya, latar belakang, peran di tim, dan keahlian.</p>
      </div>
      <div class="foot">
          <p> YGT &#169; 2024, YGTreasure</p>
      </div>
    `;
  }
}

customElements.define('footer-bar', footerBar);
