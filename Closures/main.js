//Example 01
function outerFunction() {
  let outerVar = 10;

  function innerFunction() {
    console.log(outerVar); // Accessing outerVar from the outer scope
  }
  return innerFunction;
}

const closureExample = outerFunction(); // The inner function is returned and stored

// Even though outerFunction has finished executing,
// closureExample still retains access to outerVar
closureExample(); // This will log "I'm from outer function"

//Example 02 :

const outerFun = (a, b, c) => {
  return {
    addTwoNums: function () {
      return a + b;
    },
    addThreeNums: function () {
      return a + b + c;
    },
  };
};

var store = outerFun(1, 2, 3);
console.log(store.addTwoNums());
console.log(store.addThreeNums());
