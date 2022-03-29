
document
  .querySelector(".nav__ul")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    if (
      e.target.classList.contains("nav__link") &&
      e.target.href.includes("#")
    ) {
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = id;
    }
  });
