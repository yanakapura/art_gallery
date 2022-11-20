function setLineWidth(e) {
  const width = e.target.offsetWidth;
  const widthAll = [];
  document.querySelectorAll(".section-tabs__title").forEach((el) => {
    widthAll.push(el.offsetWidth);
  });
  const newArr = widthAll.splice(0, widthAll.indexOf(width));
  const transformTo =
    newArr.length === 0 ? 0 : newArr.reduce((prev, cur) => prev + cur);
  document.querySelector(".section-tabs__line-active").style.width = width;
  document.querySelector(
    ".section-tabs__line-active"
  ).style.transform = `translateX(${transformTo}px)`;
}

function setTubs(e) {
  document.querySelectorAll(".section-tabs__tab").forEach((el) => {
    el.classList.remove("section-tabs__tab-active");
    if (el.dataset.tab === e.target.dataset.tab) {
      el.classList.add("section-tabs__tab-active");
    }
  });
  setLineWidth(e);
}

document.querySelectorAll(".section-tabs__title").forEach((el) => {
  el.addEventListener("click", setTubs);
});

document.querySelector(".input-arrows").addEventListener("click", function (e) {
  const inputNumber = document.querySelector("#input-number");
  if (e.target.dataset.input === "plus") {
    inputNumber.value++;
  } else {
    inputNumber.value > 1 && inputNumber.value--;
  }
});

document.querySelector(".form__rating").addEventListener("click", function (e) {
  console.log(e.target.classList);
  e.target.classList.toggle("fa-regular");
  e.target.classList.toggle("fa-solid");
});

// setLineWidth(e);
