//Async JS
//Callbacks , Promises , Async & Await

const datas = [
  {
    name: "Anup",
    profession: "Developer",
  },
  {
    name: "Akshay",
    profession: "Software Engineer",
  },
];

//----
/*
//1st way
function getDatas() {
  setTimeout(() => {
    let output = "";

    datas.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

const createData = (newData) => {
    setTimeout(() => {
        datas.push(newData);
    }, 2000);
}

createData({name : "Sagar" , profession : "IT Engineer"})
getDatas();
*/

//----
//in above example create data function is working properly but it needs 2 sec to update that data because we have set the timeout 2000 and getData is fetching data in 1 sec so we can able to see only 2 entries on web page but after that the 3rd entry is getting push into the array...if you want to see that changes then increase the timmer of getData and watch ..you will be able to see 3 entries

//we will modify this code to avoid this issue

//2nd way : in this first createdata will be called and then getDatas1 will be called so we will get updated data ..we are using callback in this example
function getDatas1() {
  setTimeout(() => {
    let output = "";

    datas.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

const createData1 = (newData, callback) => {
  setTimeout(() => {
    datas.push(newData);
    callback();
  }, 2000);
};

createData1({ name: "Sagar", profession: "IT Engineer" }, getDatas1);
