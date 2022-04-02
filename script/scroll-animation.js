const scrollElements = document.querySelectorAll(".js-scroll");
const scrollElementsMain = [];
scrollElements.forEach(el=>{
  if(el.classList.contains("main-animation")) {
    scrollElementsMain.push(el)
  }
});

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
  if (removeScrolledClass == true) {
    scrollElementsMain.forEach((el) => {
      el.classList.remove("scrolled")
    });
  }
  scrollElements.forEach((el) => {
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

document.querySelector(".main__slider-wrapper").addEventListener("transitionstart", function(e){
  if (e.propertyName === "transform") {
    handleScrollAnimation(true);
  }
})