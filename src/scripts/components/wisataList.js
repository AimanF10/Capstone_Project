class wisataList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    const response = await fetch('http://localhost:3000/api/wisata');
    const data = await response.json();
    this.innerHTML = `
          <div class="wisata-list">
          ${data.map((wisata) => `
            <div class="card-list">
                <img src ="${wisata.image}" alt="${wisata.nama}">
              <h3>${wisata.nama}</h3>
              <p>${wisata.deskripsi}</p>
              <a href="./detail.html?id=${wisata.id}">Lihat Detail</a>
            </div>
          `).join('')}
        </div>
      `;
  }
}

customElements.define('wisata-list', wisataList);
