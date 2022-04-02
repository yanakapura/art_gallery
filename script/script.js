function scrollIntoView(e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  if (
    (e.target.classList.contains("nav__link") ||
      e.target.classList.contains("button-up")) &&
    e.target.href.includes("#")
  ) {
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = id;
  }
}

const btnWidth = function () {

};


document.querySelector(".menu").addEventListener("click", () => {
  document
    .querySelector(".menu__wrapper")
    .classList.toggle("menu__wrapper-active");
});

btnWidth();

window.addEventListener("resize", btnWidth);
document.querySelector(".button-up").addEventListener("click", scrollIntoView);

if (window.location.pathname.includes("index")) {
document.querySelector(".nav__ul").addEventListener("click", scrollIntoView);
}
