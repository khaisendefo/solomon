Fancybox.bind()

function toggle() {
    document.addEventListener('DOMContentLoaded', function () {
      const toggleButton = document.querySelector('.header__toggle');
      const sidebar = document.querySelector('.header__nav');
      const navLinks = document.querySelectorAll('.header__nav-link');
      function closeSidebar() {
        toggleButton.classList.remove('active');
        sidebar.classList.remove('active');
      }
      toggleButton.addEventListener('click', function () {
        toggleButton.classList.toggle('active');
        sidebar.classList.toggle('active');
      });
      document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
          closeSidebar();
        }
      });
      document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && sidebar.classList.contains('active')) {
          closeSidebar();
        }
      });
      navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function() {
          closeSidebar();
        });
      });
    });
} toggle();

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


