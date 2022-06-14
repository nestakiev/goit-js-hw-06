const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
}


const onInputName = (event) => {
    // event.currentTarget.value.length === 0 ? refs.output.textContent = "Anonymous" : refs.output.textContent = event.currentTarget.value;
    let userName = event.currentTarget.value;
    refs.output.textContent = userName.length === 0 ? "Anonymous" : userName;
}

refs.input.addEventListener('input', onInputName);

