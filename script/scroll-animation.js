const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const displayScrollElement = (element) => {
      element.classList.add("scrolled");
}

function handleScrollAnimation(removeScrolledClass = false) {
  scrollElements.forEach((el) => {
    if (removeScrolledClass == true) el.classList.remove("scrolled");
    if (elementInView(el, 1)) {
      displayScrollElement(el);
    }
  });
}

document.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);

document.querySelectorAll(".main__slider-arrow").forEach((arrow) => {
  arrow.addEventListener("click", () => {
    handleScrollAnimation(true);
  });
});

document.querySelector(".product__image").addEventListener("mouseover", handleScrollAnimation);