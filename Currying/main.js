
//Example 01 :
function addition (a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

//currying in javascript
let res = addition(2)(4)(6);
console.log(res);


//Example 02 :

let emp = {
    name : "Anup",
    age : 27
}

function userInfo(obj) {
    return function(userInformation){
        return obj[userInformation];
    }
}
//currying in javascript
let output = userInfo(emp);
console.log(output("age"));
console.log(output("name"));

let op = userInfo(emp)("age");
console.log(op);

//Example of infinite currying 
function add(a) {
    return function(b) {
        if(b) return add(a+b);
        return a;
    }   
}
//we can add any number of arguments to add function to calculate the sum
console.log(add(1)(2)(3)(4)(5)());