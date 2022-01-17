const menuBtn = document.querySelector(".menu-btn");
const headerNav = document.querySelector(".header__nav");
const burgerHandler = () => {
  menuBtn.classList.toggle("open");
  headerNav.classList.toggle("open");
};
menuBtn.addEventListener("click", burgerHandler);
