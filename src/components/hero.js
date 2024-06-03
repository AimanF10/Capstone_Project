class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="hero">
                <div class="hero__desc">
                    <h1 class="hero__title">Halo Petualang</h1>
                    <p class="hero__tagline">Disini kami menampilkan daftar wisata hidden gem dari kota Yogyakarta</p>
                    <button type="button" id="explore-btn">Explore</button>
                </div>
            </div>
          `;
    }
}

customElements.define("hero-bar", Hero);