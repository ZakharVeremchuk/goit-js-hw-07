const textInput = document.querySelector("input#name-input");
const output  = document.querySelector("span#name-output");
const defaultValue = "Anonymous";

textInput.addEventListener("input", (event) => {
    const value = event.currentTarget.value.trim();
    if(value !== ""){
        output.textContent = event.currentTarget.value.trim();
    } else {
        output.textContent = defaultValue;
    }
})
