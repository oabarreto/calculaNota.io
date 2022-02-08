let off = true;

const check = document.querySelector("#checkbox");

const avToggle = document.querySelector(".av3");

const disabled = document.querySelector("#av3");

let noteOne = document.querySelector("#av1").valueAsNumber;
let noteTwo = Number(document.querySelector("#av2").value);
let noteThree = Number(document.querySelector("#av3").value);

let apsOne = Number(document.querySelector("#aps1").value);
let apsTwo = Number(document.querySelector("#aps2").value);

const calcButton = document.querySelector(".button");

let status = document.querySelector(".status");
let grades = document.querySelector(".grades");

check.addEventListener("click", function () {
  avToggle.classList.toggle("on", off);
  disabled.toggleAttribute("disabled");
  off = !off;
});

function sum(noteOne, noteTwo, noteThree, apsOne, apsTwo) {}

calcButton.addEventListener("click");
