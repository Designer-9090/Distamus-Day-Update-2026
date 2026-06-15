class DistamusHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="site-header">
        <a href="index.html" class="logo">
          <img src="distamuslogo.webp" alt="Distamus Logo">
          <span>Distamus</span>
        </a>
        <nav class="nav-links" id="navLinks">
          <a href="index.html#inicio" class="nav-link-item">Inicio</a>
          <a href="index.html#filosofia" class="nav-link-item">Filosofía</a>
          <a href="index.html#detalles" class="nav-link-item">Evolución</a>
          <a href="index.html#esperar" class="nav-link-item">Novedades</a>
          <a href="next-chapter.html" class="nav-link-item">Blogs</a>
          <a href="ddu2025.html" class="mobile-only-btn">← DDU 2025</a>
        </nav>
        <div class="header-actions">
          <a href="ddu2025.html" class="header-btn">← DDU 2025</a>
          <button class="mobile-menu-toggle" id="menuToggle" aria-label="Toggle Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    `;

    const menuToggle = this.querySelector('#menuToggle');
    const navLinks = this.querySelector('#navLinks');

    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
      });

      // Close menu when a link is clicked
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          menuToggle.classList.remove('active');
          navLinks.classList.remove('active');
        });
      });
    }
  }
}
customElements.define('distamus-header', DistamusHeader);
