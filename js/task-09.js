const refs = {
  body: document.querySelector("body"),
  text: document.querySelector(".color"),
  btn: document.querySelector(".change-color"),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeColor () {
  const newColor = getRandomHexColor()
  refs.body.style.backgroundColor = newColor;
  refs.text.textContent = newColor;
}

refs.btn.addEventListener('click', onChangeColor);
