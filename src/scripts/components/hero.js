class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="hero">
                <div class="hero__desc">
                    <h1 class="hero__title">Halo, Petualang</h1>
                    <p class="hero__tagline">Selamat datang di YGT, panduan wisata terpercaya Anda untuk menjelajahi keindahan Yogyakarta, kota budaya dan sejarah yang kaya. Kami sangat senang Anda bergabung dengan komunitas petualang kami yang penuh semangat. Di sini, Anda akan menemukan berbagai informasi menarik, rekomendasi tempat wisata terbaik, kuliner lokal yang menggugah selera, dan tips perjalanan yang bermanfaat untuk membuat pengalaman Anda semakin berkesan.
                    </p>
                    <button type="button" id="explore-btn">Explore</button>
                </div>
            </div>
          `;
    }
}

customElements.define("hero-bar", Hero);
