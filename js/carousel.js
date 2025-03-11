// Inizializza lo Swiper come al solito
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,  
  pagination: {
    el: '.swiper-pagination', 
    type: 'fraction',
  },
  effect: 'coverflow', 
  coverflowEffect: {
    rotate: 60,  
    stretch: 0,  
    depth: 50,  
    modifier: 1, 
    slideShadows: false, 
  },
  allowTouchMove: true,
  slidesPerView: 3, 
  spaceBetween: 0, 
  centeredSlides: true, 
  initialSlide: 1,
});



