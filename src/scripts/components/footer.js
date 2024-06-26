class footerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container" id="footer">
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
              <p>UI/UX Design dan Front End</p>
              <div class="social-links">
                <a href="https://github.com/Frdyan" target="_blank"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/ferdianharyadi200215/" target="_blank"><i class="fab fa-linkedin"></i></a>
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
              <img src="images/team/MuhamadBintangMandala.png" alt="Muhamad Bintang Mandala" class="team-photo">
              <h3>Muhamad Bintang Mandala</h3>
              <p>Front End</p>
              <div class="social-links">
                <a href="https://github.com/Mbintangm20" target="_blank"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/muhamad-bintang-mandala-1570752b7/" target="_blank"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="foot">
      <div class="additional-info">
        <div class="left-info">
        <h2>Peran</h2>
        <p>Situs web YG Treasure (Yogyakarta Treasure) berperan sebagai platform yang berdedikasi dalam industri pariwisata, menyediakan informasi mendalam tentang destinasi yang kurang diketahui oleh sebagian besar wisatawan yang berkunjung ke Daerah Istimewa Yogyakarta.</p>
        <h3>Copyrigth &#169; 2024 YGTreasure</h3>
        </div>
        <div class="right-info">
          <p>Follow us on social media:</p>
          <div class="social-links">
            <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="https://youtube.com" target="_blank"><i class="fab fa-youtube"></i></a>
            <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
          </div>
          <p>For inquiries, contact us at: ygtreasure@gmail.com</p>
        </div>
      </div>
    </div>
      `;
  }
}

customElements.define('footer-bar', footerBar);
