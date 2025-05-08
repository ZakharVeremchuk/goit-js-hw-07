const textInput = document.querySelector("input#name-input");
const output  = document.querySelector("input#name-input");

textInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
})
