class wisataList extends HTMLElement {
  async connectedCallback() {
    this.render();
    try {
      const response = await fetch('http://localhost:3000/api/wisata');
      const wisataData = await response.json();
      this.fetchAndRenderData(wisataData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  fetchAndRenderData(wisataData) {
    const regularWisataContainer = this.querySelector('.wisata');
    const popularWisataContainer = this.querySelector('.popular-wisata');

    wisataData.forEach((wisata) => {
      const wisataItem = document.createElement('div');
      wisataItem.className = 'wisata-item';
      wisataItem.innerHTML = `
        <img class="wisata-list-image lazyload" data-src="${wisata.image}" alt="${wisata.nama}">
        <div class="wisata-list-content">
          <p class="wisata_rating">Rating: <i class="fas fa-star"></i><span>${wisata.rating}</span></p>
          <h1 class="wisata-list-title"><a href="./detail.html?id=${wisata.id}">${wisata.nama}</a></h1>
          <p class="wisata-description">${wisata.deskripsi}</p>
        </div>
      `;

      if (wisata.rating > 4.6) {
        popularWisataContainer.appendChild(wisataItem);
      } else {
        regularWisataContainer.appendChild(wisataItem);
      }
    });
  }

  render() {
    this.innerHTML = `
      <section class="content" id="main-content">
        <div class="explore">
        <h1 class="explore-title popular" id="main-content">Daftar Wisata Populer</h1>
        <div id="popular-wisata" class="popular-wisata"></div>

        <h1 class="explore-title">Daftar Wisata Lainnya</h1>
        <div id="wisata" class="wisata"></div>
        </div>
      </section>
    `;
  }
}

customElements.define('wisata-list', wisataList);
