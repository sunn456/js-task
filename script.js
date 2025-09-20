const userName = prompt("Enter your name:");
const userAgeInput = prompt("Enter your age:");

const userAge = Number(userAgeInput);

const user = { name: userName, age: userAge };

console.log(`Name: ${user.name}, Age: ${user.age}`);

if (Number.isNaN(user.age)) {
  console.log("Invalid age input");
} else if (user.age < 18) {
  console.log("Access denied");
} else {
  console.log("Access granted");
}
