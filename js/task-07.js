const fontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

fontSizeControl.setAttribute("value", 16);
fontSizeControl.addEventListener("input", fontSizeChange);

function fontSizeChange() {
    textSpan.style.fontSize = Number(fontSizeControl.value) + "px";
}

