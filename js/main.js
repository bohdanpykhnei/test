// Бургер меню
const sideBar = document.querySelector("#menu");
const burgerBtn = document.querySelector("#burger-menu_button");
const body = document.body;

burgerBtn.addEventListener("click", open);
sideBar.addEventListener("click", close);

function open(e) {
  e.preventDefault();
  let paddingOffset = window.innerWidth - document.body.offsetWidth;
  sideBar.classList.toggle("menu__active");
  burgerBtn.classList.toggle("burger__btn-active");
  body.classList.toggle("no-scroll");
  if (body.classList.contains('no-scroll')){
    body.style.paddingRight = paddingOffset + "px";
  } else{
    body.style.paddingRight = 0;
  }
}
function close(e) {
  if (e.target.matches('a')) {
    sideBar.classList.remove("menu__active");
    burgerBtn.classList.remove("burger__btn-active");
    body.classList.remove("no-scroll");
    body.style.paddingRight = 0;
  }
}

// Слайдер
$(document).ready(function () {
  $('.social__slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    slidesToShow: 4,
    centerMode: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        centerMode: false,
        arrows: false
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }
  ]
  });
});

// Кнопка вверх
const toTopBtn = document.querySelector(".back-to-top");
window.onscroll = function () {
  if (window.pageYOffset > 580) {
    toTopBtn.style.bottom = "30px"
  } else {
    toTopBtn.style.bottom = "-50px"
  }
}
toTopBtn.addEventListener("click", function () {
  window.scrollBy({
    top: -document.documentElement.scrollHeight
  });
});