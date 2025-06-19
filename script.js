window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if (window.scrollY > 50) {
    header.classList.remove('transparent');
    header.classList.add('solid');
  } else {
    header.classList.remove('solid');
    header.classList.add('transparent');
  }
});
// script.js
document.addEventListener('DOMContentLoaded', function () {
  const servicios = document.querySelectorAll('.servicio');

  const observerOptions = { threshold: 0.3 };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Puedes dejar de observar si deseas que la animación se ejecute solo una vez:
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  servicios.forEach(servicio => {
    observer.observe(servicio);
  });
});
