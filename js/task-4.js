const el = document.querySelector(".login-form");

el.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInput = el.elements.email;
    const passwordInput = el.elements.password;
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if(email === "" || password === "") {
        alert("All form fields must be filled in");
    }else {
        const formData = {
            [emailInput.name]: email,
            [passwordInput.name]: password,
        };
        console.log(formData);
        el.reset();
    }
})