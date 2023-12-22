let counter = 0;
function getData() {
  console.log("Fetching data" + counter++);
}

function myDebounce(callback, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const optimzedFunction = myDebounce(getData , 2000);
