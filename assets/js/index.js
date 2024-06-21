Fancybox.bind();
AOS.init(
  {duration: 600, offset: 100,easing: 'ease-in-out', once: true}
);
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

document.addEventListener("DOMContentLoaded", function() {
  var openModalButtons = document.querySelectorAll(".open-modal");
  var modal = document.querySelector(".modal");
  var modalOverlay = document.querySelector(".modal__overlay");
  var modalWindow = document.querySelector(".modal__window");
  openModalButtons.forEach(function(button) {
      button.addEventListener("click", function() {
          modal.style.display = "block";
          document.addEventListener("keydown", closeModalOnEsc);
      });
  });
  modalOverlay.addEventListener("click", function(event) {
      if (!modalWindow.contains(event.target)) {
          modal.style.display = "none";
          document.removeEventListener("keydown", closeModalOnEsc);
      }
  });
  function closeModalOnEsc(event) {
      if (event.key === "Escape") {
          modal.style.display = "none";
          document.removeEventListener("keydown", closeModalOnEsc);
      }
  }
});

var forms = document.querySelectorAll('.formweb3');
forms.forEach(function(form) {
    form.addEventListener("submit", function(event){
        event.preventDefault();
        var formData = new FormData(this);
        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Ошибка отправки данных: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            alert("Данные успешно отправлены!");
            console.log(data);
            this.reset();
        })
        .catch(error => {
            alert("Ошибка отправки данных: " + error.message);
            console.error(error);
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function() {
      if (window.pageYOffset > 300) {
          scrollToTopBtn.style.display = "block";
      } else {
          scrollToTopBtn.style.display = "none";
      }
  });

  scrollToTopBtn.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
