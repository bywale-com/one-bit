const body = document.querySelector("body");
const button = document.getElementById("toggleButton");
const status = document.getElementById("status");
let isOn = localStorage.getItem("isOn") === "true";

function render() {
    status.textContent = isOn ? "ON" : "OFF";
    button.textContent = isOn ? "Turn Off" : "Turn On";
    body.classList.toggle("off", !isOn);

}


button.addEventListener("click", function() {
    isOn = !isOn;
    localStorage.setItem("isOn", isOn);
    render();
});

render();

window.addEventListener("storage", function(event) {
    if (event.key === "isOn") {
        isOn = event.newValue === "true";
        render();
    }
})