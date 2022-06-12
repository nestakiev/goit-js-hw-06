let counterValue = 0;

const refs = {
    value: document.querySelector("#value"),
    increment: document.querySelector('[data-action="increment"]'),
    decrement: document.querySelector('[data-action="decrement"]'),
}


const onIncrementValue = () => {
    counterValue += 1;
    refs.value.textContent = counterValue;
}

const onDecrementValue = () => {
    counterValue -= 1;
    refs.value.textContent = counterValue;
}

refs.increment.addEventListener('click', onIncrementValue);

refs.decrement.addEventListener('click', onDecrementValue);


