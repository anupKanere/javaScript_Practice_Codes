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
            datas.push(newData);
            let error = false;
            if (!error) {
              resolve();
            } else {
              reject("Something went wrong");
            }
        }, 2000);
    });
  };

  const start = async () => {
    await addData({name : "Sagar" , profession : "IT Engineer " , age : 28})
    getData();
  }

  start();

  //await is only valid with async
  