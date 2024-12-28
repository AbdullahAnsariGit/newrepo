// Closures Example:

//Example 01:
// function outerFunction() {
//   var outerVariable = "Hello";
//   console.log("Outer function executed and finished!");

//   function innerFunction() {
//     console.log(outerVariable); // Access Yes or Not?
//   }
//   return innerFunction;
// }

// Outer function execute done
// var outerFunctionResult = outerFunction();

// Now inner function is executed
// outerFunctionResult();

//Example 02:
// function counter() {
//   let count = 0; // Local variable jo outerFunction ke andar define hai
//   console.log("Counter function executed and finished!");

//   return function increment() {
//     count++;
//     console.log(`Current count: ${count}`); // count ko access kar raha hai
//   };
// }

// Counter function execute ho gayi
// let counterFunction = counter();

// // Ab increment function ko bar-bar call karte hain
// counterFunction(); // Output: Current count: 1
// counterFunction(); // Output: Current count: 2
// counterFunction(); // Output: Current count: 3

// Destructuring
// Problem
// const array = ["alex", 17, "BSCS"];
// const name = array[0];
// const age = array[0];
// const degree = array[0];

// // Example 01:
// const [first, second, third] = array; // Destructuring

// console.log(first); // Output: 1
// console.log(second); // Output: 2

// function fnD([first, second, third]) {
//   console.log(first); // Output:
//   console.log(second); // Output:
//   console.log(third); // Output:
// }
// fnD([1, 2, 3]);

// function fnD2(){
//     return [1,2,3]
// }
// const [a, b, c] = fnD2()

// Task 1 Same check object k sth.
// Task 2 Same check nested array k sth
// Task 3 Create a function which return an array with properties then destructure all these functions array values.

// Spread Operator

// Example 01
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];
// console.log(arr2);

// Task 1 Given two arrays, merge them into a new array using the spread operator.
// Input: const array1 = [10, 20, 30]; const array2 = [40, 50, 60];
// Output: [10, 20, 30, 40, 50, 60]

// Rest Operator

// Example 01
// function sumAll(...numbers) {
//   console.log(numbers);
//   // return numbers.reduce((acc, num) => acc + num, 0);
// }

// console.log(sumAll(1, 2, 3, 4));

// Task 1 Write a function findMax that takes any number of numeric arguments and returns the maximum value among them using the rest operator.

// Enhanced Object Literals

// 1 - Property Shorthand

// Example
// const nameObj = "Ali";
// const ageObj = 22;

// Pehle:
// const person1 = { nameObj: nameObj, nameObj: nameObj };

// Ab:
// const person2 = { nameObj, nameObj }; // Shorthand
// console.log(person2); // { name: "Ali", age: 22 }

// 2 - Method Shorthand

// const person = {
//   name: "Sara",
//   greet() {
//     // Shorthand
//     console.log(`Hello, my name is ${this.name}.`);
//   },
// };

// person.greet(); // Output: Hello, my name is Sara.

// 3 - Computed Property Names

// const key = "hobby";

// const personC = {
//   name: "Zain",
//   [key]: "Cricket", // Dynamic property name
// };

// console.log(personC); // { name: "Zain", hobby: "Cricket" }

// Array methods in js

// 1. Adding/Removing Elements
// push(): Array ke end me ek ya zyada elements add karta hai.
// Example: [1, 2, 3].push(4) → [1, 2, 3, 4]

// pop(): Array ke last element ko remove karta hai.
// Example: [1, 2, 3].pop() → [1, 2]

// unshift(): Array ke start me ek ya zyada elements add karta hai.
// Example: [1, 2, 3].unshift(0) → [0, 1, 2, 3]

// shift(): Array ke first element ko remove karta hai.
// Example: [1, 2, 3].shift() → [2, 3]

// 2. Combining/Extracting
// concat(): Do ya zyada arrays ko combine karta hai.
// Example 01: [1, 2].concat([3, 4]) → [1, 2, 3, 4]

// Example 02:
// let arr = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// let fullArr = arr.concat(arr2);
// console.log("fullArr", fullArr);

// slice(): Array ke ek portion ko extract karta hai (original array change nahi hoti).
// Example: [1, 2, 3, 4, 5].slice(1, 3) → [2, 3]

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// let copyArr = arr.slice(0, 2);
// console.log("copyArr", copyArr);

// splice(): Array me elements add/remove karta hai.
// Example: [1, 2, 3, 4].splice(2, 1, "new") → [1, 2, "new", 4]

// var arr = [37, 4, 92, 66, 1, 4, 6, 278, 2, 5, 17];

// arr.splice(4, 2, 10, 87, 70);
// console.log(arr, "spliceArr");

// Waqas: 37,4,92,66,10,87,70,6,278,2,5,17 = 12 votes

//Naveed = 1745 = 0 Pak
//Yahya= 1457 = 1
//Waqas = 7345 = 6 votes
//Ali = 745 = 2
//hadi 457 = 0 Pak
//Mudassir = 3457 = 2

// 3. Iteration Methods
// forEach(): Har element ke liye ek function run karta hai (kuch return nahi karta).
// Example: [1, 2, 3].forEach(num => console.log(num * 2))

// var arr = [37, 4, 92, 66, 1, 4, 6, 278, 2, 5, 17];
// let abc = arr.forEach((anarkali, index) => console.log(anarkali, `Yehlo ${index}`))

// Test

// 1- Slice the array to extract a subarray that contains only the first three elements.
// 2- Splice the original array by removing the last two elements and inserting the values [0, 0] at the same position.
// 3- ForEach the modified array to print each element to the console, but for every element that is even, print EVEN instead of the number.

// map(): Naya array banata hai har element par function apply karke.
// Example: [1, 2, 3].map(num => num * 2) → [2, 4, 6]

// var arr = [37, 4, 92, 66, 1, 4, 6, 278, 2, 5, 17];

// let newArr = arr.map((item, index) => {
//   if (item % 2 === 0) {
//     return item;
//   } else {
//     return "Odd";
//   }
// });
// console.log(arr);

// console.log("newArr", newArr);

// filter(): Ek naya array banata hai sirf un elements ka jo condition pass karein.
// Example: [1, 2, 3, 4].filter(num => num % 2 === 0) → [2, 4]

// var categories = ["Home Appliances", "Mobile Phones", "Computers", "Gadgets"];

// var searchQuery = prompt("Enter category:");
// var filteredArr = categories.filter((item, index) => {
//   if (item.toLowerCase().trim() === searchQuery.toLowerCase().trim()) {
//     return item;
//   }
// });

// console.log(filteredArr)

// Example:

// reduce(): Ek single value return karta hai array ke elements ko combine karke.
// Example: [1, 2, 3, 4].reduce((acc, num) => acc + num, 0) → 10

// let reduceArr = [1, 2, 3, 4].reduce((prevVal, num) => {
//   console.log("prevVal", prevVal);
//   console.log("num", num);
//   // return prevVal * num;
// });
// console.log(reduceArr);
// 1: 1 * 1 = 1
// 2: 1 * 2 = 2
// 3: 2 * 3 = 6
// 4: 6 * 4 = 24

// console.log('reduceArr',reduceArr)

// find(): Pehla element return karta hai jo condition pass karein uske allawa values ko check nh krta. Jo array me value nh h toh yh return krega undefined
// Example: [1, 2, 3, 4].find(num => num % 2 === 0) → 2

// let fruits = [
//   "apple",
//   "mango",
//   "banana",
//   "orange",
//   "grapes",
//   "apple",
//   "mango",
//   "banana",
//   "orange",
//   "grapes",
// ];

// let findFruit = fruits.find((element, index) => {
//   return element === "grapes" ;
// });

// console.log('findFruit',findFruit);

// findIndex(): Pehle element ka index return karta hai jo condition pass karein. jo value array me nh h toh yh return krega -1
// Example: [1, 2, 3, 4].findIndex(num => num > 2) → 2

// let fruits = [
//   "apple",
//   "mango",
//   "banana",
//   "orange",
//   "grapes",
//   "apple",
//   "mango",
//   "banana",
//   "orange",
//   "grapes",
// ];

// let findFruit = fruits.findIndex((element) => {
//   return element === "grap";
// });

// console.log("findFruit", findFruit);

// 4. Checking/Searching
// includes(): Check karta hai agar value array me hai ya nahi (true/false).
// Example: [1, 2, 3].includes(2) → true

// let arr = [1,24,5,6,78,9]

// let checkArray = arr.includes(77);

// console.log('checkArray',checkArray)

// indexOf(): Value ka pehla index return karta hai (nahi mila to -1).
// Example: [1, 2, 3].indexOf(2) → 1

// let arr = [1,24,5,6,78,9,78];

// let checkElIndex = arr.indexOf(78);
// console.log(checkElIndex)

// lastIndexOf(): Value ka last index return karta hai.
// Example: [1, 2, 3, 2].lastIndexOf(2) → 3

// let  arr = [1,24,5,6,78,9,78];
// let checkLastElIndex = arr.lastIndexOf(78)
// console.log('checkLastElIndex',checkLastElIndex);

// 5. Sorting/Transforming
// sort(): Array ke elements ko sort karta hai (default ascending).
// Example: [3, 1, 4, 2].sort() → [1, 2, 3, 4]

// let arr = [1, 13, 36, 2, 8, 17];
// let arr = [2,1,5,3,4]

// let sortArr = arr.sort((a, b) => {
//   console.log(a, b);
//   console.log(a - b);
//   return a-b
// });
// console.log("sortArr", sortArr);

// Naveed : 1,2,8,13,17,36 = 10 values
// hadi : 1,2,13,8,17,36 = 1 votes
// Sameer: 1,2,13,17,8,36  = 1 vates
// Shameer: undefined = 1

// reverse(): Array ke elements ka order ulta karta hai.
// Example: [1, 2, 3].reverse() → [3, 2, 1]

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let arr = ['apple', 'mango', 'banana', 'orange'];

// let reverseArr = arr.reverse();
// console.log("reverseArr", reverseArr);

// 6. Others
// join(): Array ke elements ko ek string me combine karta hai.
// Example: [1, 2, 3].join('-') → "1-2-3"
// let arr = ["apple", "mango", "banana", "orange"];
// let joinAlp = arr.join(" and ");
// console.log('joinAlp', joinAlp)

// split(): String ko array me todta hai (Array ka part nahi, string ka method hai).
// Example: "1-2-3".split('-') → [1, 2, 3]

// let word = "apple mango banana";
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let obj = {
//     name:'abc',
//     class:1
// }

// let makeArr = word.split(" ");

// console.log('makeArr', makeArr);

// isArray(): Check karta hai agar variable array hai ya nahi.
// Example: Array.isArray([1, 2, 3]) → true

// let checkArr = Array.isArray(obj);
// console.log(checkArr);

// 1. Reverse Each Word in a Sentence
// Write a function that takes a string, reverses each word in the string, and returns the modified string.
// Use split to break the sentence into words, reverse to reverse each word, and join to combine them back.

// Example Input/Output:
// javascript
// Copy code
// reverseWords("hello world"); // "olleh dlrow"
// reverseWords("JavaScript is fun"); // "tpircSavaJ si nuf"

// function reverseWords(a) {
//   //   let makeArr = a.split(" ");
//   //   let reverseWordIntoArr = makeArr.map((item, index) => {
//   //     return item.split("").reverse().join("");
//   //   });

//   //   let arrayConvertIntoWord = reverseWordIntoArr.join(" ");
//   //   return arrayConvertIntoWord;
//   return a
//     .split(" ")
//     .map((item) => item.split("").reverse().join(""))
//     .join(" ");
// }

// console.log(reverseWords("My name is alex")); // "olleh dlrow"

// SetTimeOut in Js

let mybtn = document.getElementById("btn");

mybtn.addEventListener("click", () => {
  //   setTimeout(() => {
  //     alert("Stop");
  //   }, 10000);

//   setInterval(() => {
//     console.log("Js is fun");
//   }, 3000);
});

// Callback in Js

// Defination:
// callback ek function hai jo dusre function ko ek kaam khatam hone ke baad chalane ke liye diya jata hai.

// Real life example:
// Man lijiye aap kisi dost ko phone karte hain aur kehte hain:
// "Mujhe tumhari help chahiye, kaam pura ho jaye to mujhe batana."

// Yahaan:

// 1- Aapka dost kaam karega (yeh main function hai).
// 2- Jab kaam pura hoga, tab aapko batayega (yeh callback function hai).

// Example code:
function kaamPuraHua(message) {
    console.log("Callback function chal gaya: " + message);
}

function kaamKaro(callback) {
    console.log("Kaam shuru ho gaya...");
    setTimeout(() => {
        console.log("Kaam pura ho gaya!");
        callback("Yeh hai callback ka message.");
    }, 5000); // 2 second ka delay
}

// Callback function pass kiya
kaamKaro(kaamPuraHua);





// Task: Countdown Timer with a Callback
// Ek function banao jo countdown kare, jaise 5 se 0 tak numbers print kare.
// Jab countdown khatam ho jaye, tab ek callback function ko call kare jo ek message display kare, jaise "Countdown Complete!".

// Requirements:
// Ek function ho countdown, jo ek number se countdown kare.
// Ek callback function pass ho jo tab chale jab countdown khatam ho.
// setTimeout ka use karo har number ke beech delay ke liye.

// Output
// 5
// 4
// 3
// 2
// 1
// 0
// Countdown Complete!

// function countdown(start, callback) {
//     function displayNumber(num) {
//       if (num < 0) {
//         callback(); // Jab countdown khatam ho jaye
//         return;
//       }
//       console.log(num);
//       setTimeout(() => displayNumber(num - 1), 1000); // 1 second delay
//     }
//     displayNumber(start);
//   }

//   function onComplete() {
//     console.log("Countdown Complete!");
//   }

//   // Call the countdown function
//   countdown(5, onComplete);
