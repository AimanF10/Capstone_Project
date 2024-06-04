class headerApp extends HTMLElement {
    connectedCallback() {
        this.render();
    }
  
    render() {
        this.innerHTML = `
                <p class="app">YG Treasure</p>
                <button type="button" id="hamburger_logo" aria-label="navigation-menu" tabindex="0">☰</button>
            <nav>
                <ul id="navigation" class="nav-list">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Favorite</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </nav>
        `;
    }
  }
  
  customElements.define("header-app", headerApp);