/* comment 
multiline */

//alert('Hello, World');

const FIRSTNAME = "Joey"
let lastName = "Yiu" // E56
// var lastName = "Yiu"; // E55
console.log(FIRSTNAME, lastName);
let age = 21;
console.log(typeof age, age);
console.log(FIRSTNAME, lastName);
age = "twenty";
age = 21.5;
age = true;
// console.log(typeof age, age);
// console.log(FIRSTNAME, lastName);

const fullName = (first, last) => {
    // console.log(first, last);
    console.log(first, last);
    // console.log(first + "'s favourite drink is" + drink);
    console.log(`${first}'s favourite drink is ${drink}`);
}

fullName("Joey", "Yiu");
fullName("Carmen", "Lau");
fullName("Kayla", "Bensing");