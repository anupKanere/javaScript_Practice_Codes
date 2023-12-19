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

const getData = () => {
  setTimeout(() => {
    let result = "";
    datas.forEach((data, indes) => {
      result += `<li>${data.name}</li>`;
    });
    document.body.innerHTML = result;
  }, 1000);
};

const addData = (newData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // datas.push(newData);
      let add = datas.push(newData);
      if (add) {
        resolve();
      } else {
        reject("Something went wrong");
      }
    }, 2000);
  });
};

addData({ name: "Sagar", profession: "IT Engineer" })
  .then(getData)
  .catch((err) => console.log(err));

addData({ name: "Shubham", profession: "IT Engineer" })
  .then(getData)
  .catch((err) => console.log(err));
