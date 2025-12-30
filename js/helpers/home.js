// helpers/home.js

export function home() {
  // ===== Actualizar el año del footer =====
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ===== Inicializar carruseles =====
  initCarousel();
  initProductCarousel3D(); 

  console.log("Menú hamburguesa + carruseles activos ✅");
}


// ===== CARRUSEL PRINCIPAL =====
export function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  if (!slides.length) return;

  let current = 0;
  const intervalTime = 5000; // 5 segundos

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  // Cambio automático
  let autoSlide = setInterval(nextSlide, intervalTime);

  // Pausar al pasar el mouse
  slides.forEach(slide => {
    slide.addEventListener('mouseenter', () => clearInterval(autoSlide));
    slide.addEventListener('mouseleave', () => {
      autoSlide = setInterval(nextSlide, intervalTime);
    });
  });

  showSlide(current);
}


// ===== CARRUSEL DE PRODUCTOS =====
document.addEventListener('DOMContentLoaded', () => {
  const ring = document.querySelector('.carousel-ring');
  const items = document.querySelectorAll('.carousel-item');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const itemCount = items.length;
  const angle = 360 / itemCount;
  let rotation = 0;

  // Posicionar los ítems dinámicamente
  items.forEach((item, index) => {
    item.style.setProperty('--item-index', index);
    item.style.setProperty('--angle', `${angle}deg`);
    item.style.transform = `
      rotateY(${index * angle}deg)
      translateZ(var(--radius))
    `;
  });

  function updateCarousel() {
    ring.style.transform = `rotateY(${rotation}deg)`;
  }

  nextButton.addEventListener('click', () => {
    rotation -= angle;
    updateCarousel();
  });

  prevButton.addEventListener('click', () => {
    rotation += angle;
    updateCarousel();
  });

  // Rotación automática
  let autoRotate = setInterval(() => {
    rotation -= angle;
    updateCarousel();
  }, 5000);

  // Pausar cuando el usuario interactúe
  [nextButton, prevButton, ring].forEach(el => {
    el.addEventListener('mouseenter', () => clearInterval(autoRotate));
    el.addEventListener('mouseleave', () => {
      autoRotate = setInterval(() => {
        rotation -= angle;
        updateCarousel();
      }, 5000);
    });
  });

  // Botón "Ver más"
  document.querySelector('.btn-ver-mas').addEventListener('click', () => {
    window.location.href = '/productos.html';
  });

  updateCarousel();
});






