let off = true;

const check = document.querySelector("#checkbox");

const avToggle = document.querySelector(".av3");

const disabled = document.querySelector("#av3");

check.addEventListener("click", function () {
  avToggle.classList.toggle("on", off);
  disabled.toggleAttribute("disabled");
  off = !off;
});
