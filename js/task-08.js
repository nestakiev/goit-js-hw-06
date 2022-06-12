const formRef = document.querySelector(".login-form");

const onSubmitForm = (event) => {
    event.preventDefault();

    const formEl = event.currentTarget.elements;

    const mail = formEl.email.value;
    const password = formEl.password.value;

    if (mail.length === 0 || password.length === 0) {
       return alert("Warning! All forms must be filled");
    }

    const formData = {
        mail,
        password,
    }

    console.log(formData);

    formRef.reset()
}

formRef.addEventListener("submit", onSubmitForm)


