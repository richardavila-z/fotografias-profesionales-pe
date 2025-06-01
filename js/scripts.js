console.log("EL SCRIPT ESTA COENCTADO");

document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween: 5, /* 5px entre slides */
    centeredSlides: true, /* Slides centrados */
    slidesPerView: 'auto', /* Ajuste automático */
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 5
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 5
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
});

// SCRIPT PARA SLIDER MARCAS

document.addEventListener('DOMContentLoaded', () => {
  const sliderTrack = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');

  // Clonamos los slides y los agregamos al final (solo una vez)
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    sliderTrack.appendChild(clone);
  });

  // Reinicio suave de la animación
  sliderTrack.addEventListener('animationiteration', () => {
    sliderTrack.style.transition = 'none';
    sliderTrack.style.transform = 'translateX(0)';
    // Fuerza un reflow para reiniciar sin saltos
    void sliderTrack.offsetWidth;
    sliderTrack.style.transition = '';
  });
});
document.getElementById("navbarSupportedContent").addEventListener('click', () => {
  let div = document.getElementById("navbarSupportedContent");
    console.log("se hixo click")
     div.classList.remove("show");
     div.classList.add("collapse");
  
});