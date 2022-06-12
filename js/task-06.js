const inputEl = document.querySelector("#validation-input");

const onCheckValidationInput = (event) => {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
    
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    }
}

inputEl.addEventListener('blur', onCheckValidationInput);