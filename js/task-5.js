function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

btnColor.addEventListener('click', handlColor);

function handlColor() {
  const colorBtn = getRandomHexColor();
  document.body.style.backgroundColor = colorBtn;
  spanColor.textContent = colorBtn;
}

console.log(document.body);
