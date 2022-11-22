const startSwitchBtn = document.querySelector("[data-start]");
const stopSwitchBtn = document.querySelector("[data-stop]");
let startId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartSwitch() {
    startId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startSwitchBtn.setAttribute("disabled", true);
    stopSwitchBtn.removeAttribute("disabled");
}

function onStopSwitch() {
    clearInterval(startId);
    startSwitchBtn.removeAttribute("disabled");
    stopSwitchBtn.setAttribute("disabled", true);
}

startSwitchBtn.addEventListener("click", onStartSwitch);
stopSwitchBtn.addEventListener("click", onStopSwitch);