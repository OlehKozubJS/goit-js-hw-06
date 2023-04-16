const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("input", isValid);

function isValid() {
    let numberOfChars = Number(validationInput.getAttribute("data-length"));
    validationInput.className = Number(validationInput.value.length) === numberOfChars ? "valid" : "invalid";
}