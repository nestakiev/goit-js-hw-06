const refs = {
  div: document.querySelector("#boxes"),
  input: document.querySelector('[type="number"]'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
}

const newDivs = [];
let amount = 0;

const onGetAmountDivs = (event) => {
  amount = Number(event.currentTarget.value);
}

const onCreateBoxes = (amount) => {
  let newSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    newSize = 30 + newDivs.length * 10;
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${newSize}px`;
    box.style.height = `${newSize}px`;
    newDivs.push(box);
  }
  refs.div.append(...newDivs);
}

const onCreateBtn = () => {
  onCreateBoxes(amount);
  refs.input.value = "";
  amount = 0;
}

const onDestroyBtn = () => {
  refs.div.innerHTML = '';
  amount = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.input.addEventListener('blur', onGetAmountDivs);
refs.btnCreate.addEventListener('click', onCreateBtn);
refs.btnDestroy.addEventListener('click', onDestroyBtn);

