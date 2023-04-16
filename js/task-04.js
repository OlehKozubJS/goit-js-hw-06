const decrementButton = document.querySelectorAll("button")[0];
const incrementButton = document.querySelectorAll("button")[1];
const valueSpan = document.querySelector("#value");

let counterValue = 0;

decrementButton.addEventListener("click", decrementFunction);
incrementButton.addEventListener("click", incrementFunction);

function decrementFunction () {
    counterValue -= 1;
    valueSpan.innerText = counterValue;
}

function incrementFunction () {
    counterValue += 1;
    valueSpan.innerText = counterValue;
}