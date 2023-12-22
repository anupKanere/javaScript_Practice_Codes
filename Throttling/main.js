// const myThrottle = (func, delay) => {
//   return function (...args) {
//     document.getElementById("btn").disabled = true;
//     setTimeout(() => {
//       func();
//     }, delay);
//   };
// };

// const newFunc = myThrottle(() => {
//   document.getElementById("btn").disabled = false;
//   console.log("User Clicked");
// }, 2000);

// Throttling in JavaScript is a technique used to control
// the rate at which a function is executed. It limits the
// number of times a function can be called over a specified time
// interval. This is particularly useful when you want to ensure
// that a function is not called more often than a certain frequency,
// especially in scenarios like handling user input or controlling
// the frequency of API calls.


const myThrottle = (func, delay) => {
  let throttled = false;

  return function (...args) {
    if (!throttled) {
      throttled = true;
      func();
      setTimeout(() => {
        throttled = false;
      }, delay);
    }
  };
};

const throttledFunc = myThrottle(() => {
  console.log("User Clicked");
}, 2000);
