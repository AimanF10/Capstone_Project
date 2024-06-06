class wisataList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="wisata-info">
        <h3>Informasi Wisata</h3>
        <p>Temukan keindahan Daerah Istimewa Yogyakarta dengan mengunjungi destinasi wisata hidden gem terbaik.</p>
        <h3>Rekomendasi Wisata dari Kami</h3>
        <p>Nikmati pengalaman wisata yang tak terlupakan dengan destinasi wisata pilihan dari tim YG Treasure.</p>
      </div>
      <div class="list-wisata"></div>
      <div class="list-populer"></div>
      `;
  }
}

customElements.define('wisata-list', wisataList);
