class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
    this.initCarousel();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <div class="carousel-container">
          <div class="carousel">
            <img src="/images/hero.jpg" alt="Hero 1" class="carousel-image active">
            <img src="/images/hero-2.jpg" alt="Hero 2" class="carousel-image">
            <img src="/images/hero-3.jpg" alt="Hero 3" class="carousel-image">
            <img src="/images/hero-4.jpg" alt="Hero 4" class="carousel-image">
            <img src="/images/hero-5.jpg" alt="Hero 5" class="carousel-image">
          </div>
          <div class="carousel-dots">
            <span class="dot active" data-index="0"></span>
            <span class="dot" data-index="1"></span>
            <span class="dot" data-index="2"></span>
            <span class="dot" data-index="3"></span>
            <span class="dot" data-index="4"></span>
          </div>
        </div>
        <div class="hero-overlay"></div>
        <div class="hero__desc">
          <h1 class="hero__title">Halo, Petualang</h1>
          <button type="button" id="explore-btn">Explore</button>
          <p class="hero__tagline">Selamat datang di YGT, panduan wisata terpercaya Anda untuk menjelajahi keindahan Daerah Istimewa Yogyakarta,<br> Kota budaya dan sejarah yang kaya. Kami sangat senang Anda bergabung dengan komunitas petualang kami yang penuh semangat.<br> Di sini, Anda akan menemukan berbagai informasi menarik, rekomendasi tempat wisata terbaik, kuliner lokal yang menggugah selera,<br> dan tips perjalanan yang bermanfaat untuk membuat pengalaman Anda semakin berkesan.</p>
        </div>
      </div>
    `;
  }

  initCarousel() {
    const images = this.querySelectorAll('.carousel .carousel-image');
    const dots = this.querySelectorAll('.carousel-dots .dot');
    let currentIndex = 0;

    function showImage(index) {
      images[currentIndex].classList.remove('active');
      dots[currentIndex].classList.remove('active');
      currentIndex = index;
      images[currentIndex].classList.add('active');
      dots[currentIndex].classList.add('active');
    }

    function showNextImage() {
      const nextIndex = (currentIndex + 1) % images.length;
      showImage(nextIndex);
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showImage(index);
      });
    });

    setInterval(showNextImage, 3000); // Change image every 3 seconds
  }
}

customElements.define('hero-bar', Hero);
