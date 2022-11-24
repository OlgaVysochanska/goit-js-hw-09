import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startBtn = document.querySelector("[data-start]");
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");
startBtn.setAttribute("disabled", true);

let startTime = 0;
let deltaTime = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        startTime = selectedDates[0].getTime();
        if (startTime < Date.now()) {
            Notiflix.Notify.info('Please choose a date in the future');
            return;
        }
    
    startBtn.removeAttribute("disabled");
    startBtn.addEventListener("click", setTimer);
  },
};

flatpickr("#datetime-picker", options);

function setTimer() {
    const intervalId = setInterval(() => {
        
        const currentTime = Date.now();
        deltaTime = startTime - currentTime;
        const time = convertMs(deltaTime);
        
        daysEl.textContent = time.days;
        hoursEl.textContent = time.hours;
        minutesEl.textContent = time.minutes;
        secondsEl.textContent = time.seconds;

        if (time.days <= 0 && time.hours <= 0 && time.minutes <= 0 && time.seconds <= 0) {
        clearInterval(intervalId);
        return;
    }
    }, 1000);
   
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}