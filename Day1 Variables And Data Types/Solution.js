// Activity 1: Variable Declaration
//* Task 1
var age = 25;
console.log("age:", age);

//*Task 2
let name = "Manthan";
console.log("name:", name);

// Activity Content Declaration
//*Task 3
const isLoggedIn = true;
console.log("isLoggedIn:", isLoggedIn);

// Activity Data Types
//*Task 4
let day = 1;
console.log("\n Data Types Check \n");
console.log("Day:", day, " is type of :", typeof day);

let lastName = "Gaikwad";
console.log("lastName:", lastName, "is type of :", typeof lastName);

let isOnline = true;
console.log("isOnline:", isOnline, "is type of :", typeof isOnline);

let friend = {
  name: "Raj",
  age: 26,
};
console.log("friend:", friend, "is type of :", typeof friend);

let hero = ["Iron Man", "Spider Man", "Flash"];
console.log("hero:", hero, "is type of :", typeof hero);

//  Activity 4: Reassigning Variables
//* Task 5
let myDesignation = "Software Engineer";
console.log("\nReassignment using let ");
console.log(`Initial Designation is : ${myDesignation}`);
myDesignation = "Senior Software Engineer";
console.log(`And new Designation is : ${myDesignation}`);

// Activity 5: Understanding const
//* Task 6
const myval = 23;
console.log("\nReassignment using const");
console.log(`Initial value : ${myval}`);
myval = 25;
// console.log(`Final value : ${myval}`);
//! TypeError: Assignment to constant variable.
