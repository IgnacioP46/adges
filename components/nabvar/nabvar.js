import "../nabvar/nabvar.css"

export function renderNavbar() {
    const header = document.querySelector('header');
    header.innerHTML = `
      <nav class="navbar">
        <img src="../public/faviconAdges.png" alt="Imagen 2">
        <h1 class="navbar-brand">ADGES</h1>
        <ul class="navbar-menu">
          <li><a href="#about-us">Sobre Nosotros</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#contact">Contáctanos</a></li>
        </ul>
      </nav>
    `;
  
    window.onscroll = function() { fixedNavbar() };
  
    const navbar = document.querySelector(".navbar");
    const sticky = navbar.offsetTop;
  
    function fixedNavbar() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
  }
  
  