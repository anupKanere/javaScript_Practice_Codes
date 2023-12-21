
const sum = (num) => {
    let res = 0;
    for (let i = 0; i <= num; i++) {
        res = res + i;
    }
    return res;
};

const memoize = (fun) => {
    let cache = {};
    return function(...args) {
        let n = args[0];
        if (n in cache) {
            console.log("from cache");
            return cache[n];
        } else {
            console.log("Calculating...");
            let result = fun(n);
            cache[n] = result;
            return result;
        }
    };
};

let output = memoize(sum);

console.time();
console.log(output(5));
console.timeEnd();


console.time();
console.log(output(5));
console.timeEnd();


