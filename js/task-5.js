function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const el = document.querySelector("button.change-color");
const body = document.querySelector("body");
const span = document.querySelector(".color");

el.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
})