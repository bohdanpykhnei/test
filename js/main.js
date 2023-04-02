// Бургер меню
const sideBar = document.querySelector("#menu");
const burgerBtn = document.querySelector("#burger-menu_button");
const body = document.body;
burgerBtn.addEventListener("click", open);
sideBar.addEventListener("click", close);
function open(e) {
  e.preventDefault();
  sideBar.classList.toggle("menu__active");
  burgerBtn.classList.toggle("burger__btn-active");
  body.classList.toggle("no-scroll");

}
function close(e) {
  if (e.target.matches('a')) {
    sideBar.classList.remove("menu__active");
    burgerBtn.classList.remove("burger__btn-active");
    body.classList.remove("no-scroll");
  }
}
// Слайдер
$(document).ready(function () {
  $('.social__slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  });
});
// Кнопка вверх
const toTopBtn = document.querySelector(".back-to-top");
window.onscroll = function () {
  if (window.pageYOffset > 580) {
    toTopBtn.style.bottom = "30px"
  } else {
    toTopBtn.style.bottom = "-40px"
  }
}
toTopBtn.addEventListener("click", function () {
  window.scrollBy({
    top: -document.documentElement.scrollHeight
  });
});