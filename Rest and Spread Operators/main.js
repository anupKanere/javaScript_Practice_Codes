//Rest and Spread Operator


//-------------------------------------------------------------------------------------------------------------------------------------
//Rest Operator ('...') :The rest operator (...) is used in function parameters to collect all the remaining arguments into an array...i.e  they are used to combine the multiple arguments

//Example 01 :
const addNums = (a, b, c, ...others) => {
    console.log(others, "Printing other parameters");
    return a + b + c;
};

const result = addNums(1, 2, 3, 4, 5, 6, 7, 8);
console.log(result);

//Example 02 : Rest with  Object

var students = {
    name: "Anup",
    age: 27,
    hobbies: ["Cricket", "Bike Riding"],
};

const { ...all } = students;
console.log(all, "Printing Example 02 of Rest");

//-------------------------------------------------------------------------------------------------------------------------------------
//Spread Operator ('...') : The spread operator (...) is used to expand elements of an iterable (like arrays) into individual elements

var names = ["Anup", "Akshay", "Swapnil"];

const getNames = (n1, n2, n3) => {
    console.log(n1, n2, n3);
};

getNames(...names);

//Example 02 : Spread with  Object (overriding obj values with the help of spread operator)

var employees = {
    name: "Anup",
    age: 27,
    hobbies: ["Cricket", "Bike Riding"],
};

var newEmp = {
    ...employees,
    age: 28,
};

console.log(newEmp, "Modifying obj data with spread example");

//-------------------------------------------------------------------------------------------------------------------------------------