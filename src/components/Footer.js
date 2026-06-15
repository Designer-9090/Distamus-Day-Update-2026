class DistamusFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="footer-container">
          <div class="footer-brand">
            <div class="logo">
              <img src="distamuslogo.webp" alt="Distamus Logo">
              <span>Distamus</span>
            </div>
            <p class="footer-tagline">Transformando el futuro digital, una actualización a la vez.</p>
          </div>
          <div class="footer-links-group">
            <div class="footer-links-col">
              <h4>DDU 2026</h4>
              <a href="index.html#inicio">Inicio</a>
              <a href="index.html#filosofia">Filosofía</a>
              <a href="index.html#detalles">Evolución</a>
              <a href="index.html#esperar">Novedades</a>
            </div>
            <div class="footer-links-col">
              <h4>Historial</h4>
              <a href="ddu2025.html">Archivo DDU 2025</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="copyright">&copy; 2026 Distamus Day Update. Todos los derechos reservados. <span class="footer-motto">The Next Chapter Begins.</span></p>
          <div class="footer-badge">10 de Julio, 2026</div>
        </div>
      </footer>
    `;
  }
}
customElements.define('distamus-footer', DistamusFooter);
