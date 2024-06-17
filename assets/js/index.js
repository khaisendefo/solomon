Fancybox.bind()

document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.service__splide ', {
      perPage: 1,
      autoplay: false,
      gap: '10px',
      pagination: false,
      arrows: false,
  }).mount();
  document.querySelector('.services__arrow-prev').addEventListener('click', function() {
      splide.go('<');
  });
  document.querySelector('.services__arrow-next').addEventListener('click', function() {
      splide.go('>');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.gallery__slider', {
      perPage: 1,
      autoplay: false,
      gap: '20px',
      pagination: false,
      arrows: false, 
  }).mount();
  document.querySelector('.gallery__arrow-prev').addEventListener('click', function() {
      splide.go('<');
  });

  document.querySelector('.gallery__arrow-next').addEventListener('click', function() {
      splide.go('>');
  });
});