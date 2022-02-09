let off = true;

const check = document.querySelector("#checkbox");

const avToggle = document.querySelector(".av3");

const disabled = document.querySelector("#av3");

const calcButton = document.querySelector(".calc");

const clearButton = document.querySelector(".clear");

const resToggle = document.querySelector(".result");

const statusClass = document.querySelector(".status");
const grades = document.querySelector(".grades");

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

  let res = 0;

  let attention = off === true && res < 7;
  let approved = res > 7;
  let disapproved = res < 7;

  let statusText;

  resToggle.classList.add("on");

  if (off === true) {
    res = (noteOne + noteTwo + apsOne + apsTwo) / 2;
  } else if (off === false) {
    let totalAv1 = noteOne + apsOne;
    let totalAv2 = noteTwo + apsTwo;
    let min = Math.min(totalAv1, totalAv2, noteThree);
    res = (totalAv1 + totalAv2 + noteThree - min) / 2;
  }

  if (isNaN(res)) {
    res = "...";
  }

  if (attention) {
    statusClass.classList.toggle(".attention");
    statusText = "av3";
  } else if (approved) {
    statusClass.classList.toggle(".approved");
    statusText = "Aprovado";
  } else if (disapproved) {
    statusClass.classList.toggle(".disapproved");
    statusText = "Reprovado";
  }

  statusClass.innerHTML = statusText;
  grades.innerHTML = res;
});

clearButton.addEventListener("click", function () {
  resToggle.classList.remove("on");

  let form = document.querySelector(".notes-form").reset();

  let resetField = "...";

  statusClass.innerHTML = resetField;
  grades.innerHTML = resetField;
});
