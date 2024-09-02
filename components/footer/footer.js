import "../footer/footer.css"

export function renderFooter() {
    const footer = document.querySelector('footer');
    footer.innerHTML = `
      <div class="footer-content">
        <div class="footer-contact">
          <p>Correo: <a href="mailto:adges.admf@gmail.com">adges.admf@gmail.com</a></p>
          <p>Teléfono: <a href="tel:914463700">914 463 700</a></p>
        </div>
        <div class="footer-images">
          <img src="../public/logo_antigo.png" alt="Imagen 1">
         <img src="../public/logoAdmin.png" alt="Imagen 2">
         <img src="../public/logoColegioA.sgv" alt="Imagen 3">
        </div>
      </div>
    `;
  }
  