document.addEventListener('DOMContentLoaded', function() {
    console.log('El documento está completamente cargado y analizado');

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Formulario enviado. Gracias por contactarnos.');
            contactForm.reset();
        });
    }
});
