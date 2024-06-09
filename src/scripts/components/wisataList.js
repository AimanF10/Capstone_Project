class wisataList extends HTMLElement {
  async connectedCallback() {
    try {
      const response = await fetch('http://localhost:3000/api/wisata');
      const wisataData = await response.json();
      this.render(wisataData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render(wisataData) {
    this.innerHTML = `
      <h2>Daftar Wisata</h2>
      <div class="wisata-list">
        ${wisataData.map((wisata) => `
          <div class="wisata-item">
            <img src="${wisata.image}" alt="${wisata.nama}" style="width:200px;">
            <h3>${wisata.nama}</h3>
            <p>${wisata.deskripsi}</p>
            <a href="detail.html?id=${wisata.id}">Detail</a>
          </div>
        `).join('')}
      </div>
    `;
  }
}

customElements.define('wisata-list', wisataList);
