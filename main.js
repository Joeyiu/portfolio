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

let drink = "cola";
//global defining what "drink" is

const fullName = (first, last) => {
    // console.log(first, last);
   // console.log(first + "'s favourite drink is " + drink);
    console.log(`${first}'s favourite drink is ${drink}`);
    let veggie = "cucumber"; // local scope
    console.log(veggie);
}

nameList = ["Joey Yiu", "Carmen Lau", "Kayla Bensing"];
// square brackets = Array
nameList.push("Tiana Lewis");
nameList.push("Jessica Yang");
console.log(nameList);
//nameList.pop(); - to get rid of a name

console.log(nameList[1]);

fullName("Joey", "Yiu");
fullName("Carmen", "Lau");
fullName("Kayla", "Bensing");

//i=counter ++=+1 --=-1
for (let i = 0; i < nameList.length; i++) {
    fullName(nameList[i]);
}

// while loop
let j = 0;
while (j<nameList.length) {
    fullName(nameList[j]);
    j++;
}
// -----------------------------------------------------------------------------------------------





const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
console.log(d, year);