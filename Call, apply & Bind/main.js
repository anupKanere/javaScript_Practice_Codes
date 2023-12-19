//call()
//Example 01 :
/*
let emp = {
    name : "Anup",
    age : 27,
    designation : "Developer",
    printDetails: function(){
        console.log(this);
    }
}

emp.printDetails();

let emp2 = {
    name : "Akshay",
    age : 29,
    designation : "Software Developer",
}

emp.printDetails.call(emp2);
*/

//Example 02 :
/*
let emp3 = {
    name : "Sagar",
    age : 21,
    designation : "Developer",
}

const printDetails = function(){
    console.log(this);
}

printDetails.call(emp3.name);

let emp4 = {
    name : "Shubham",
    age : 28,
    designation : "Software Developer",
}

printDetails.call(emp4);
*/

//Example 03 :
let emp3 = {
    name : "Sagar",
    age : 21,
    designation : "Developer",
}

let emp4 = {
    name : "Shubham",
    age : 28,
    designation : "Software Developer",
}

const printDetails = function(city){
    console.log(this.name + " " + city);
}

//Function borrowing
printDetails.call(emp3 , "sangli");
printDetails.call(emp4 , "sangli");

//apply()
printDetails.apply(emp3 , ["sangli-apply"]);

//bind()
let res  = printDetails.bind(emp4 , "Kolhapur-Bind");
console.log(res());

/*
Certainly! call(), apply(), and bind() are methods
available on functions in JavaScript that allow you to 
manipulate the this context and sometimes pass arguments 
when invoking functions.
*/