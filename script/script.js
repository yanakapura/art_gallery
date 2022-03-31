function scrollIntoView(e) {
 e.preventDefault();
  const id = e.target.getAttribute("href");
  if ((e.target.classList.contains("nav__link") || e.target.classList.contains("button-up")) && e.target.href.includes("#")) {
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = id;
  }
}

const btnWidth = function () {
  console.log("hello");
  if (window.innerWidth < 992 || window.innerWidth > 1400) {
    document
      .querySelectorAll("svg")
      .forEach((el) => el.setAttribute("width", "155"));
    document
      .querySelectorAll("rect")
      .forEach((el) => el.setAttribute("width", "155"));
    document
      .querySelectorAll("svg")
      .forEach((el) => el.setAttribute("height", "50"));
    document
      .querySelectorAll("rect")
      .forEach((el) => el.setAttribute("height", "50"));
  }
  if (window.innerWidth >= 992 && window.innerWidth <= 1400) {
    document
      .querySelectorAll("svg")
      .forEach((el) => el.setAttribute("width", "105"));
    document
      .querySelectorAll("rect")
      .forEach((el) => el.setAttribute("width", "105"));
    document
      .querySelectorAll("svg")
      .forEach((el) => el.setAttribute("height", "40"));
    document
      .querySelectorAll("rect")
      .forEach((el) => el.setAttribute("height", "40"));
  }
};


document.querySelector(".menu").addEventListener("click", () => {
  console.log("hello");
  document
    .querySelector(".menu__wrapper")
    .classList.toggle("menu__wrapper-active");
   
});

// btnWidth();

// window.addEventListener("resize", btnWidth);
document.querySelector(".button-up").addEventListener("click", scrollIntoView)
document.querySelector(".nav__ul").addEventListener("click", scrollIntoView);
