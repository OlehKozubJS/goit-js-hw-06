const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", enterTheName);

function enterTheName() {
    nameOutput.innerText = nameInput.value === "" ? "Anonymous" : nameInput.value;
}