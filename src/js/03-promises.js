import Notiflix from 'notiflix';

const form = document.querySelector(".form");
form.addEventListener("submit", createPromiseStart);

function createPromiseStart(e) {
  e.preventDefault();
  const step = Number(form.step.value);
  let delay = Number(form.delay.value);
  const amount = Number(form.amount.value);
  for (let position = 1; position <= amount; position++) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) =>
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay)
  );
  return promise;
}
