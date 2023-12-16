// UseCases
// 1.write code to get useray of names form given useray of users
// 2.get back only active users
// 3.sort the users by their age in descending order

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
];

const names = [];

//solution 01 using for loop showing all user names;
for (index = 0; index < user.length; index++) {
  names.push(user[index].name);
}
console.log("showing all user names : ");
console.log(names);

//solution 2 using forEach loop (it doesnt returns anything ..it will modify the object)showing only active users
console.log("showing all active user names : ");
user.forEach((user) => {
  if (user.isActive) {
    console.log(user.name);
  }
});

//solution 03 : Sorting the users as per their ages in descending order
const userNames = user
  .filter((users) => users.isActive)
  .map((users) => users.name);
console.log("showing all active user names  using filter and map: ");
console.log("UserNames", userNames);

//solution 04 :
const sortedUsersNames = user
  .filter((user) => user.isActive)
  .sort((user1, user2) => (user1.age > user2.age ? -1 : 1))
  .map((user) => user.age);
console.log("Showing sorted(Descending order) active userAges  ");
console.log(sortedUsersNames);

//solution 05 :
const sortedUsers = user
  .filter((user) => user.isActive)
  .sort((user1, user2) => (user1.age > user2.age ? 1 : -1))
  .map((user) => {
    return {
      name: user.name,
      age: user.age,
    };
  });
console.log("Showing sorted(Ascending order)  active users names and ages  ");
console.log(sortedUsers);
