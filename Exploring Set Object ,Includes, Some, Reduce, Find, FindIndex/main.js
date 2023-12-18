const user = [
  {
    id: 1,
    name: "Anup",
    age: 26,
    isActive: true,
  },
  {
    id: 2,
    name: "Akshay",
    age: 28,
    isActive: true,
  },
  {
    id: 3,
    name: "Shubham",
    age: 27,
    isActive: false,
  },
  {
    id: 4,
    name: "Sagar",
    age: 23,
    isActive: false,
  },
  {
    id: 5,
    name: "adarsh",
    age: 35,
    isActive: true,
  },
];

//------------------------------------------------------------------
//level 0 solution
const nameExists = (name, user) => {
  let exists = false;
  for (i = 0; i < user.length; i++) {
    if (user[i].name === name) {
      exists = true;
    }
  }
  return exists;
};

//------------------------------------------------------------------
// level 1
//using find() fun ..it will return whole object ..you can convert it into boolean by using Boolean() function
const userExists = (name, user) => {
  const userObj = user.find((user) => user.name === name);
  //   return Boolean(userObj);
  return userObj;
};

//------------------------------------------------------------------

//level 2
//using findIndex() ..it will return the index value
const userIndex = (name, user) => {
  const index = user.findIndex((user) => user.name === name);
  return index;
};

//------------------------------------------------------------------

//level 3
//some() fun will directly return boolean value
const isUserPresent = (name, user) => {
  const present = user.some((user) => user.name === name);
  return present;
};

//------------------------------------------------------------------
//Usecase : adding elements into array without modifying old array
//spread operator(...) is used to expand the array into individual elements
const arr = [1, 2];

const append = (array, element) => {
  return [...array, element]; // returning new array by adding all elements of old array and new element
};

console.log(append(arr, 3)); // adding element into array ;
console.log(arr); //printing old array

//------------------------------------------------------------------
//usecase : remove duplicate elements from the array
//level 0 :Using includes()

const dupArr = [1, 2, 2, 3, 3, 3, 4, 5, 6, 6];
const anotherArr = [1, 2, 2, 3, 3, 3, 4, 5, 6, 7, 6, 8, 9, 10];

const removeDuplicateElements = (arr) => {
  const uniqueElementsArray = [];

  arr.forEach((ele) => {
    if (!uniqueElementsArray.includes(ele)) {
      uniqueElementsArray.push(ele);
    }
  });

  return uniqueElementsArray;
};
console.log("Using includes() function")
console.log(removeDuplicateElements(dupArr));
console.log(removeDuplicateElements(anotherArr));

//level 01 : using set object

const removeDuplicate = (arr) => {
  return [...new Set(arr)];
};
console.log("Using Set Object")
console.log(removeDuplicate(dupArr));
console.log(removeDuplicate(anotherArr));
console.log(dupArr); // printing original array...original arr will not be modified

//level 01 : using reduce() funtion
const dupArr1 = [1, 2, 2, 3, 3, 3, 4, 5, 6, 6];
const anotherArr1 = [1, 2, 2, 3, 3, 3, 4, 5, 6, 7, 6, 8, 9, 10];

const removeDup = (arr) =>{
  return arr.reduce((acc , element) => {
    return acc.includes(element) ? acc : [...acc , element]
  },[])
}
console.log("Using Reduce function")
console.log(removeDup(dupArr1));
console.log(removeDup(anotherArr1));

//------------------------------------------------------------------
//UseCase : Merge 2 arrays

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const mergeArray = (array1 , array2) =>{
  return array1.concat(array2)
  // return  [...array1, ...array2]; // we can also concate 2 arrays with this type

  // array1.push(...array2);// this  line will also merge 2 array but it will modify the 1st array
  // return array1 
}

console.log("Merging  2 arrays using concate() function")
console.log(mergeArray(arr1, arr2));
console.log(arr1 , "Printing original Array 1");
console.log(arr2 , "Printing original Array 2");
