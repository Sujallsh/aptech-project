var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {

      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,

    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    
  });

  //   Aos
AOS.init({
    duration: 1000,
    easing: "ease-in-out",
});

AOS.init();

// Scroll to top
const scrollToTop = document.querySelector('.scroll-to-top')
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTop.style.display = "grid"
    } else {
        scrollToTop.style.display = "none"
    }
})


let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Get the navbar toggler icon element
var navbarToggler = document.querySelector(".navbar-toggler");

// Add a click event listener to the navbar toggler icon
navbarToggler.addEventListener("click", function() {
  // Get the navbar collapse element
  var navbarCollapse = document.querySelector(".navbar-collapse");

  // Toggle the "show" class on the navbar collapse element
  navbarCollapse.classList.toggle("show");
});
