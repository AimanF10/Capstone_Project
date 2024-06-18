class wisataList extends HTMLElement {
  async connectedCallback() {
    try {
      const response = await fetch('https://back-end-capstone-eta.vercel.app/api/wisata');
      const wisataData = await response.json();
      this.render(wisataData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render(wisataData) {
    this.innerHTML = `
    <section class="content" id="main-content">
    <div class="explore">
        <h1 class="explore-title">Daftar Wisata</h1>
        
        <div id="wisata" class="wisata">
        ${wisataData.map((wisata) => `
            <article class="wisata-list">
                <img class="wisata-list-image" src="${wisata.image}" alt="${wisata.nama}">
                <div class="wisata-list-content">
                    <p class="wisata_rating">Rating: <i class="fas fa-star"></i><span>${wisata.rating}</span></p>
                    <h1 class="wisata-list-title"><a href="./detail.html?id=${wisata.id}">${wisata.nama}</a></h1>
                    <p class="wisata-description">${wisata.deskripsi}</p>
                </div>
            </article>
        `).join('')}
        </div>
    </div>
    </section>
    `;
  }
}

customElements.define('wisata-list', wisataList);
