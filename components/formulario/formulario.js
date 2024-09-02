import "../formulario/formulario.css"

export function renderForm() {
    const contactSection = document.querySelector('#contact');
    contactSection.innerHTML = `
      <div class="contact-card">
        <h2>Reportar Incidencia</h2>
        <form id="incident-form" class="contact-form">
          <input type="text" name="nombre" placeholder="Nombre" required>
          <input type="text" name="apellidos" placeholder="Apellidos" required>
          <input type="email" name="correo" placeholder="Correo" required>
          <input type="tel" name="telefono" placeholder="Teléfono (opcional)">
          <input type="text" name="calle" placeholder="Calle y Número" required>
          <input type="text" name="asunto" placeholder="Asunto" required>
          <textarea name="consulta" placeholder="Escriba aquí su consulta" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    `;

    const form = document.getElementById('incident-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const formData = {
        nombre: form.nombre.value,
        apellidos: form.apellidos.value,
        correo: form.correo.value,
        telefono: form.telefono.value,
        calle: form.calle.value,
        asunto: form.asunto.value,
        consulta: form.consulta.value,
      };

      fetch('http://localhost:3000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(response => response.text())
      .then(result => {
        alert(result);
        form.reset();
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Ocurrió un error. Inténtalo de nuevo.');
      });
    });
}
