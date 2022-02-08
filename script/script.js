let off = true;

const check = document.querySelector("#checkbox");

const avToggle = document.querySelector(".av3");

const disabled = document.querySelector("#av3");

const calcButton = document.querySelector(".button");

let status = document.querySelector(".status");
let grades = document.querySelector(".grades");

check.addEventListener("click", function () {
  avToggle.classList.toggle("on", off);
  disabled.toggleAttribute("disabled");
  off = !off;
});

calcButton.addEventListener("click", function () {
  let noteOne = document.querySelector("#av1").valueAsNumber;
  let noteTwo = document.querySelector("#av2").valueAsNumber;
  let noteThree = document.querySelector("#av3").valueAsNumber;

  let apsOne = document.querySelector("#aps1").valueAsNumber;
  let apsTwo = document.querySelector("#aps2").valueAsNumber;
  let status = document.querySelector(".status");
  let grades = document.querySelector(".grades");

  const resToggle = document.querySelector(".result");

  resToggle.classList.toggle("on");

  let res = (noteOne + noteTwo + apsOne + apsTwo) / 2;

  if (isNaN(res)) {
    res = "...";
  }

  grades.innerHTML = res;
});
