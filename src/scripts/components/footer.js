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
              <img src="images/team/FerdiansyahHaryadi.png" alt="Ferdiansyah Haryadi" class="team-photo">
              <h3>Ferdiansyah Haryadi</h3>
              <p>Deskripsi singkat tentang peran di tim.</p>
              <div class="social-links">
                <a href="https://github.com/" target="_blank"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/" target="_blank"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
            <div class="team-member">
              <img src="images/team/Muhammad_Aiman_Nurhakim.jpg" alt="Muhammad Aiman Nurhakim" class="team-photo">
              <h3>Muhammad Aiman Nurhakim</h3>
              <p>Front-End dan Back End.</p>
              <div class="social-links">
                <a href="https://github.com/AimanF10" target="_blank"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/muhammad-aiman-nurhakim-1620a6220/" target="_blank"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
            <div class="team-member">
              <img src="/images/.......jpg" alt="Muhamad Bintang Mandala" class="team-photo">
              <h3>Muhamad Bintang Mandala</h3>
              <p>Deskripsi singkat tentang peran di tim</p>
              <div class="social-links">
                <a href="https://github.com/" target="_blank"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in" target="_blank"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="foot">
      <div class="additional-info">
        <div class="left-info">
        <p>Situs web YG Treasure (Yogyakarta Treasure) berperan sebagai platform yang berdedikasi dalam industri pariwisata, menyediakan informasi mendalam tentang destinasi yang kurang diketahui oleh sebagian besar wisatawan yang berkunjung ke Daerah Istimewa Yogyakarta.</p>
        <p>For inquiries, contact us at: ygtreasure@gmail.com</p>
        <h3>Copyrigth &#169; 2024 YGTreasure</h3>
        </div>
        <div class="right-info">
          <p>Follow us on social media:</p>
          <div class="social-links">
            <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i> Facebook</a>
            <a href="https://youtube.com" target="_blank"><i class="fab fa-youtube"></i> Youtube</a>
            <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i> Instagram</a>
          </div>
        </div>
      </div>
    </div>
      `;
  }
}

customElements.define('footer-bar', footerBar);
