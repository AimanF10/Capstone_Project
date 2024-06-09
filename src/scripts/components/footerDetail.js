if (!customElements.get('footer-detail')) {
  class footerDetail extends HTMLElement {
    connectedCallback() {
      this.render();
    }

    render() {
      this.innerHTML = `
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
  customElements.define('footer-detail', footerDetail);
}
