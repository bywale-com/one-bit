// deprecated code

//
const status = document.getElementById("status");
const button = document.getElementById("toggleButton");
const light = document.getElementById("light");
const body = document.querySelector("body");
let isOn = localStorage.getItem("isOn") === "true";
// let isOn = false;
function render() {
    status.textContent = isOn ? "ON" : "OFF";
    button.textContent = isOn ? "Turn off" : "Turn On";
    
    light.classList.toggle("on", isOn);
    body.classList.toggle("on", isOn);
}

button.addEventListener("click", function () {
    isOn = !isOn;
    localStorage.setItem("isOn", isOn);
    render();
});

render();


// deperecated code:
// const header = document.querySelector("h1");
// const p = document.querySelector("p");

// header.classList.toggle("on", isOn);
// p.classList.toggle("on", isOn);