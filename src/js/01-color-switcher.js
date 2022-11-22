const startSwitchBtn = document.querySelector("[data-start]");
const stopSwitchBtn = document.querySelector("[data-stop]");
let start;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartSwitch() {
    start = setInterval(() => {
document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
}

function onStopSwitch() {
    clearInterval(start);
}

startSwitchBtn.addEventListener("click", onStartSwitch);
stopSwitchBtn.addEventListener("click", onStopSwitch);