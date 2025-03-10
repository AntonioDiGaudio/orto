
const swiper = new Swiper('.swiper', {
    direction: 'horizontal', // Puoi scegliere 'horizontal' o 'vertical' per il tipo di scorrimento
    loop: true, // Loop continuo
    pagination: {
      el: '.swiper-pagination', // Se vuoi la paginazione
    },
    navigation: {
      nextEl: '.swiper-button-next', // Pulsante next
      prevEl: '.swiper-button-prev', // Pulsante prev
    },
    scrollbar: {
      el: '.swiper-scrollbar', // Se desideri aggiungere un scrollbar
    },
    autoplay: {
        delay: 8000,
      },
      effect: 'cube',
  cubeEffect: {
    slideShadows: false,
  },
  });
  
