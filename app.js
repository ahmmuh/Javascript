const btn = document.getElementById("btn");

btn.addEventListener("click", changeText);

function changeText() {
  document.getElementById("demo").innerHTML = "så där ja";

}

var x, d, y;
x = 10;
d = 20;
y = d + x;

console.log(y);

//let/const

let score = 10;
score = 20;
console.log(score);

//error, you can not change

const score = 10;
score = 20;
console.log(score);


//object
const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    isMarried: true
  },
  {
    id: 2,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    isMarried: false
  },
  {
    id: 3,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    isMarried: true
  },
  {
    id: 4,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    isMarried: false
  }
];

//object
const person = {
  id: 4,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  isMarried: false
};
//forech, map,filter

users.forEach(function(user){
console.log(user);
})

const userId = users.map(function(user) {
return user.id;

});
console.log(userId);

const userMarried = users.filter(function(user) {
  return user.isMarried === true;
});

const userMarried = users
  .filter(function(user) {
    return user.isMarried === true;
  })
  .map(function(user) {
    return user.id;
  });
console.log(userMarried);
console.log(userMarried);

//distr

const {id, name, isMarried } = person;
console.log(name);

//for loop and while
for (let i = 0; i < users.length; i++) {
  console.log(i);
}
let i = 0;
while (i < users.length) {
  console.log(`while loop:${i}`);
  i++;
}

var x = 101;
var y = 21;

if (x > 10 && y >20) {
  console.log("x is equal or grether");
} else if (x < 10) {
  console.log("x is less then 10");
} else {
  console.log("x is greater than 10");
}

//ternary operators

const x = 10;

const color = x >= 10 ? "red" : "blue";
console.log(color);


//switch
switch (color) {
  case "blue":
    console.log("color is blue");
    break;
  case "red":
    console.log("color is red");
    break;
  case "yellow":
    console.log("color is yellow");
    break;
}

// functions
function addNum(num1, num2) {
  return num1 + num2;
}

console.log(addNum(10, 20));

//arrow function

const addNum = (num1, num2) => {
  return num1 + num2;
};

console.log(addNum(20, 13));

const addNum = (num1, num2) => num1 + num2;

  console.log(addNum(20, 13));

//consruction function

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = new Date(age);
  this.getFullYear = function() {
    return this.age.getFullYear();
  };
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
}
const person1 = new Person("Ahmed ", "Mukhtar", 34);
console.log(person1);

//another way for construction function

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = new Date(age);
}
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}${this.age}`;
};
Person.prototype.getFullYear = function() {
  return this.age.getFullYear();
};

const person1 = new Person("Ahmed ", "Mukhtar ", "1995-03-20");
console.log(person1.getFullName());
console.log(person1.getFullYear());

//class construction

class Person {
  constructor(firstName, lastName, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = new Date(age);
    this.address = address;
  }

  getFullYear() {
    return this.age.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}${this.age}`;
  }
  getAddress() {
    return `${this.address}`;
  }
}
//instatiate object
const person1 = new Person(
  "Ahmed ",
  "Mukhtar ",
  "1990-03-20",
  "Ystarvägen 139"
);
const address = new Person();
console.log(person1.getFullName());
console.log(person1.getFullYear());
console.log(person1.getAddress());

//a little submit form and insert item into the list.
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#fname");
const emailInput = document.querySelector("#email");
const btn = document.querySelector(".btn");
const error = document.querySelector(".error");
const success = document.querySelector(".success");
const usersList = document.querySelector(".users");

myForm.addEventListener("submit", addItems);

function addItems(e) {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    error.classList.add("error");
    error.innerHTML = "Please fild out all information";
    setTimeout(() => error.remove(), 3000);
  } else {
    success.classList.add("success");
    success.innerHTML = "Your email has been sent successfuly";
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
    );
    usersList.appendChild(li);

    nameInput.value = "";
    emailInput.value = "";
    setTimeout(() => success.remove(), 3000);
  }
}
