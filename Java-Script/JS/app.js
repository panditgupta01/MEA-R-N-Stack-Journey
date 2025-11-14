// console.log("hello");
// let a = 34;
// let b = 19;
// console.log("sum is", a+b);

// const { createElement } = require("react");




// str1="mango";
// if((str1[0]==="a") && (str1.length>3)){
//     console.log("Good String.");
// }
// else{
//     console.log("Not good string");
// }




// Assignment qs

// num = 1010;

// if(num%10===0){
//     console.log("good");
// }
// else{
//     console.log("bad");
// }


// let name = prompt("Enter name");
// let age = prompt("Enter age");
// console.warn(name, "is", age, "years old");



// let a = "84957842";
// let b = "72";

// if(a[a.length-1]===b[b.length-1]){
//   console.log("Last digit is same");
// }else{
//   console.log("Last digit is not same");
// }

// let a = "Amarnath Gupta";
// console.log(a.replace("Gupta","Prasad"));



// let student = ["Amarnath", "Anil", "Deepak", 10, 11, 12];
// console.log(student);

// student[1] = "Dhruv";
// console.log(student);

// student[11] = 45;
// console.log(student);




// 2D arrsy

// let a = [['x', null, '0'], [null, 'x', null], ['0', null, 'x']];

// a[0].splice(1,1,0);
// a[2].splice(1,1,0);
// console.log(a);


// JS part 3

// // Q1
// let student = ["Amarnath", "Anil", "Deepak", 10, 11, 12,34];
// for(let i = 0; i<student.length; i++){
//     console.log(student[i]);
// }
// for(std of student){
//     console.log(`for of loop ${std}`);
// }
// console.log(`student is ${student[1]}`)
// let n = 4;
// console.log(student.slice(0,n));

// // Q2
// console.log(student.slice(-1));

// // Q3
// if(student.length==0){
//     console.log("String is empty");
// }else{
//     console.log("String is not empty");
// }

// // Q4
// let name1 = 'AmarNath';
// let n = 4;
// if(name1[n] == name1[n].toLowerCase()){
//     console.log("String is in lower case");
// }else{
//     console.log("String is not in Lower case");
// }

// // Q5
// let str = prompt("please enter a string");
// console.log(`original string = ${str}`);
// console.log(`string without spaces = ${str.trim()}`);/


// // Q6
// let str = "Anil";
// if(student.includes(str)){
//     console.log("Element Found");
// }else{
//     console.log("Element not Found");
// }



// // To Do App

// let todo = [];

// let act = prompt("Please enter Request");
// while(true){
//     if(act=="quit"){
//         console.log(`Quiting App`);
//         break;
//     }
//     else if(act=="add"){
//         let task  = prompt("Enter the task name");
//         todo.push(task);
//         console.log(`Task Added`);
//     }
//     else if(act=="list"){
//         console.log(`.............`);
//         for(let i = 0; i<todo.length; i++){
//             console.log(i, todo[i]);
//         }
//         console.log(`.............`);
//     }
//     else if(act=="delete"){
//         let del = prompt("Enter the index");
//         todo.splice(del, 1);
//         console.log("Task deleted");
//     }
//     else{
//         console.log("Invalid Input");
//         break;
//     }
//     act = prompt("Please enter Request");
// }



// JS part-4

// let arr = [1,2,3,4,2,4,68,4,6,9,43,23];

// num = 2;

// for(let i = 0; i<=arr.length; i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// let n = 5;

// let fact = 1;

// for (let i = 1; i<=n; i++){
//     fact = fact*i;
// }
// console.log(fact);

// let largest = 0;
// for(let i = 0; i<arr.length; i++){
//     if(largest<=arr[i]){
//         largest=arr[i];
//     }
// }
// console.log(largest);



// num = prompt("Welcome to number gessing gane.\nPlease enter a number bitween 1 to 10: ");
// guess = Math.floor(Math.random()*10)+1;
// if(num==guess){
//     console.log("Your guessed ",num,"number is correct");
// }else{
//     console.log("Sorry try again");
// }


// JS part-5

// num = Math.floor(Math.random()*6)+1;
// console.log(num);

// let carDetails = {
//     name: "Mahindra",
//     model: "b6",
//     color: "red",
// }
// console.log(carDetails.name);

// let persionDetails = {
//     name:"Amarnath",
//     age: "22",
//     city: "Madhubani"
// }
// console.log(persionDetails);
// persionDetails.city = "Vadodara";
// console.log(persionDetails);
// persionDetails.country = "India";
// console.log(persionDetails);




// js part-6

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let n = 6;
// let newArr = [];
// function largerNumber(arr, n) {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > n){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(largerNumber(arr, n));


// let str = "abcdabcdefggzzzzzzzgh";
// let newStr = "";
// newStr += str[0];
// let notFound = false;
// function uniqueStr(str, newStr) {
//     for (let i = 1; i < str.length; i++) {
//         for (let j = 0; j < newStr.length; j++) {
//             if (newStr[j] === str[i]) {
//                 notFound = false;
//                 break;
//             }
//             else if (newStr[j] !== str[i]) {
//                 notFound = true;
//             }
//         }
//         if (notFound == true) {
//             newStr = newStr + str[i];
//         }
//     }
//     return newStr;
// }
// console.log(uniqueStr(str, newStr));


// let countryArr = [];
// let country;
// let char;
// function bigCountry(country, countryArr){
//     while(true){
//         country = prompt("Enter country name(or type 'done' to finish)");
//         if(country.toLowerCase() === 'done'){
//             break;
//         }
//         countryArr.push(country);
//     }
//     char = countryArr[0];
//     for(let i = 1; i < countryArr.length; i++){
//         if(countryArr[i].length > char.length){
//             char = countryArr[i];
//         }
//     }
// }
// bigCountry(country, countryArr);
// console.log(char);
// console.log(countryArr);


// let str = "amarnath gupta";
// let vowel = 0;
// function vowelFinder(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'a') {
//             vowel += 1;
//         }
//         else if (str[i] === 'e') {
//             vowel += 1;
//         }
//         else if (str[i] === 'i') {
//             vowel += 1;
//         }
//         else if (str[i] === 'o') {
//             vowel += 1;
//         }
//         else if (str[i] === 'u') {
//             vowel += 1;
//         }
//     }
// }
// vowelFinder(str);
// console.log(vowel);


// let start = 4;
// let end = 9;
// function random(start, end){
//     console.log(Math.floor(Math.random() * (end - start) + start));
// }
// random(start, end);



// // JS (Part-7)

// let arr = [];
// let avg = 0;    
// let arrayAverage = (arr) => {
//     for(i = 0; i<arr.length; i++){
//         avg = avg + arr[i];
//     }
//     return avg;
// }
// console.log(arrayAverage([2, 4, 4, 5, 6]))


// let isEven = (num) => {
//     if(num % 2 == 0){
//         return "Even";
//     } else{
//         return "Odd";
//     }
// }
// console.log(isEven(0));

// const object = {
//     message: 'Hello,World!',
//     logMessage () {
//         console.log("hi");
//     }
// };
// setTimeout(object.logMessage, 2000);

// let length = 4;
// function callback() {
//     console.log(this.length);
// }
// const object = {
//     length:5,
//     method(callback){
//         callback();
//     },
// };
// object.method(callback, 1, 2);


// JS Part-8

// let arr = [5, 5, 6, 0, 8, 11, 3];
// let square = arr.map((num) => (num*num));
// let sum = square.reduce((res, el) => (res + el));
// let avg = sum/square.length;
// console.log(avg);

// let arr = [5, 9, 1, 55, 7, 3, 6, 5];
// let arr5 = arr.map((num) => (num+5));
// console.log(arr5);

// let arr = ["amarnath", "anil", "deepak", "ram", "shyam"];
// let upperArr = arr.map((word) => (word.toUpperCase()));
// console.log(upperArr);

// let doubleAndReturnArgs = (arr, ...arg) => [...arr, ...arg.map((el) => (el*2))]
// let arr = [5, 9, 1, 55, 7, 3, 6, 5];
// let a = 8;
// let b = 6;
// let c = 9;
// console.log(doubleAndReturnArgs(arr, a, b, c));

// let mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
// let obj1 = {
//     name: "Amarnath",
//     div: "7A10",
//     roll: 27,
// };
// let obj2 = {
//     branch: "CSE",
//     sem: 7,
// };
// console.log(mergeObjects(obj1, obj2));




// JS Part-9

// let input = document.createElement("input");
// let button = document.createElement('button');
// let body = document.querySelector('body');
// body.appendChild(input);
// body.appendChild(button);
// let inp = document.querySelector('input');
// inp.setAttribute("class", "class");
// let btn = document.querySelector('button');
// btn.innerText = "Click me"

// inp.setAttribute("placeholder", "username");
// btn.setAttribute("id", "btn");

// document.getElementById("btn").style.backgroundColor = "blue";
// document.getElementById("btn").style.color = "white";

// let h1 = document.createElement("h1");
// body.appendChild(h1);
// h1.innerText = "DOM Practice";
// h1.style.textDecoration = "underline";
// h1.style.color = "purple";

// let p = document.createElement("p");
// body.append(p);
// p.innerHTML = "Apna College <b>Delta</b> Practice";




// JS Part-10
// let body = document.querySelector("body");
// let form = document.querySelector("form");
// let user = document.querySelector("#username");
// let pass = document.querySelector("#password");
// let div = document.querySelector("div");
// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     console.log(`Hi username = ${user.value} and password = ${pass.value}`);
// });
// div.addEventListener("mouseout", function(){
//     console.log("Mouuse Out");
// });
// div.addEventListener("keypress", function() {
//     console.log("Key Pressed")
// });
// window.addEventListener("scroll", function() {
//     console.log("Mouse Scroolled");
// });
// window.addEventListener("load", function() {
//     console.log("Loded");
// });


// let btn = document.createElement("button");
// form.append(btn);
// btn.innerText = "Ok";
// btn.addEventListener("click", function(event) {
//     btn.style.color = "green";
// });


// let input2nd = document.querySelector("#input2nd");
// let h12nd = document.querySelector("#h12nd");
// input2nd.addEventListener("input", function() {
//     h12nd.textContent = input2nd.value.replace(/[^a-zA-Z\s]/g, "");
// });


