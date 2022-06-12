const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
}

const onInputName = (event) => {
    event.currentTarget.value.length === 0 ? refs.output.textContent = "Anonymous" : refs.output.textContent = event.currentTarget.value;
}

refs.input.addEventListener('input', onInputName);

