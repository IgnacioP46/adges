import { renderNavbar } from './components/nabvar/nabvar.js';
import { renderFooter } from './components/footer/footer.js';
import { renderForm } from './components/formulario/formulario.js';


document.addEventListener("DOMContentLoaded", function() {
  renderNavbar();
  renderFooter();

  const main = document.querySelector('main');
  main.innerHTML = `
    <section class="hero">
      <div class="hero-text">Hacemos de tu comunidad un hogar</div>
    </section>

    <section id="about-us" class="section">
      <h2>Sobre Nosotros</h2>
      <p>ADGES es una empresa familiar con sede en Madrid, especializada en la administración de fincas. Ofrecemos una atención cercana a los propietarios, gestión contable, asesoramiento integral y gestión administrativa. Nuestro compromiso es hacer de tu comunidad un lugar donde te sientas en casa.</p>
    </section>

    <section id="services" class="section">
      <div class="service-item">
        <h3>Atención a los Propietarios</h3>
        <p>Brindamos una atención personalizada y cercana a cada uno de los propietarios.</p>
      </div>
      <div class="service-item">
        <h3>Gestión Contable</h3>
        <p>Manejamos todas las cuentas de tu comunidad de manera transparente y eficaz.</p>
      </div>
      <div class="service-item">
        <h3>Asesoramiento</h3>
        <p>Ofrecemos asesoramiento legal y administrativo adaptado a tus necesidades.</p>
      </div>
    </section>

    <section id="contact" class="section">
    </section>
  `;

  renderForm();
});


