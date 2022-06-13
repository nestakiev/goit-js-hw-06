const refs = {
  div: document.querySelector("#boxes"),
  input: document.querySelector('[type="number"]'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
}

let newDivs = [];
let amountDivs = 0;

const onGetAmountDivs = (event) => {
  amountDivs = event.currentTarget.value;
}

const onCreateBoxes = (amount) => {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    let newSize = 30 + newDivs.length * 10;
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${newSize}px`;
    box.style.height = `${newSize}px`;
    newDivs.push(box);
    console.log(newDivs);
  }
  refs.div.append(...newDivs);
  amountDivs = 0;
  newDivs.splice(0, newDivs.length);
}

const onCreateBtn = () => {
  onCreateBoxes(amountDivs);
  refs.input.value = "";  
}

const onDestroyBtn = () => {
  refs.div.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.input.addEventListener('blur', onGetAmountDivs);
refs.btnCreate.addEventListener('click', onCreateBtn);
refs.btnDestroy.addEventListener('click', onDestroyBtn);

