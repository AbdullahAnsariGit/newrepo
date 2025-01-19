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

// let mybtn = document.getElementById("btn");

// mybtn.addEventListener("click", () => {
//   //   setTimeout(() => {
//   //     alert("Stop");
//   //   }, 10000);
//   //   setInterval(() => {
//   //     console.log("Js is fun");
//   //   }, 3000);
// });

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
// function kaamPuraHua(message) {
//   console.log("Callback function chal gaya: " + message);
// }

// function kaamKaro(nameFunc, cb) {
//   console.log(cb);
//   console.log("Kaam shuru ho gaya...");
//   setTimeout(() => {
//     console.log("Kaam pura ho gaya!");
//     nameFunc("Yeh hai callback ka message.");
//   }, 5000); // 2 second ka delay
// }

// // Callback function pass kiya
// kaamKaro(kaamPuraHua, "abdullah");

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

//Map in js

// Example 1
// const map = new Map();

// // Adding key-value pairs
// map.set("name", "Alice");
// map.set("age", 25);
// map.set("city", "New York");

// console.log(map);
// Accessing values using keys
// console.log(map.get('name'));
// console.log(map.get('age'));

// Checking if a key exists
// console.log(map.has('city')); // Output: true
// console.log(map.has('country')); // Output: false

// console.log(map);
// Removing a key-value pair
// map.delete("age");

// Checking the size of the map
// console.log(map.size);

// let obj = {
//   name: "alex",
//   class: 12,
// };

// obj.foreach((el) => {
//   console.log(el);
// });

// Iterating over Map
// map.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });

// Example 2
// const map = new Map();

// const obj1 = { id: 1 };
// const obj2 = { id: 2 };

// // // Adding objects as keys
// map.set(obj1, "Object 1");
// map.set(obj2, "Object 2");

// map.clear()
// console.log(map)
// // Accessing values using objects as keys
// console.log(map.get(obj1)); // Output: Object 1
// console.log(map.get(obj2)); // Output: Object 2

// Map ke Methods
// .set(key, value)

// Description: Key-value pair ko map mein add ya update karta hai.
// Example: map.set('name', 'Alice')
// .get(key)

// Description: Kisi key ki corresponding value ko fetch karta hai.
// Example: map.get('name') — returns 'Alice'
// .has(key)

// Description: Check karta hai ki specified key map mein exist karti hai ya nahi.
// Example: map.has('name') — returns true
// .delete(key)

// Description: Map se kisi key-value pair ko remove karta hai.
// Example: map.delete('name')
// .clear()

// Description: Map ke sare key-value pairs ko remove kar deta hai.
// Example: map.clear()
// .size

// Description: Map mein total number of key-value pairs ko return karta hai.
// Example: map.size — returns the size of the map.
// .forEach(callback)

// Description: Map ke har key-value pair ke liye ek callback function ko execute karta hai.
// Example:
// javascript

// map.forEach((value, key) => {
//   console.log(key, value);
// });

// HOC in js
// Example: 1
// function greeting(name, callback) {
//     console.log("Hello, " + name);  // Greeting message print karega
//     callback(); // Ye callback function ko call karega (sayGoodbye ko)
//   }

//   function sayGoodbye() {
//     console.log("Goodbye!"); // Goodbye message print karega
//   }

//   greeting("Alice", sayGoodbye);

// Example 2:

// function multiplyBy(x) {
//     return function(y) {
//       return x * y;
//     };
//   }

//   const multiplyBy2 = multiplyBy(2);
//   console.log(multiplyBy2(5));

// Generator function
// ek-ek number return karne hain bina ek sath saari memory consume kiye

// Example 1
// function* meraGenerator() {
//   yield "Pehli Value";
//   yield "Dusri Value";
//   yield "Tisri Value";
// }

// const gen = meraGenerator(); // Generator ko call karne se ek iterator milta hai

// console.log(gen.next()); // { value: "Pehli Value", done: false }
// console.log(gen.next()); // { value: "Dusri Value", done: false }
// console.log(gen.next()); // { value: "Tisri Value", done: false }
// console.log(gen.next()); // { value: undefined, done: true }

// Example 2
// For Infinity count
// function* numbersGenerator() {
//     let num = 1;
//     while (true) {
//         yield num++;
//     }
// }

// const nums = numbersGenerator();

// console.log(nums.next().value); // 1
// console.log(nums.next().value); // 2
// console.log(nums.next().value); // 3
// console.log(nums.next().value); // 3
// console.log(nums.next().value); // 3
// console.log(nums.next().value); // 3
// console.log(nums.next().value); // 3
// console.log(nums.next().value); // 3
// console.log(nums.next().value); // 3
// console.log(nums.next().value); // 3
// console.log(nums.next().value); // 3
// console.log(nums.next().value); // 3
// console.log(nums.next().value); // 3
// console.log(nums.next().value); // 3

// Example 3

// function* countingGenerator() {
//     console.log("Generator shuru ho raha hai...");
//     yield 1; // Pehli value
//     console.log("Pehle yield ke baad...");
//     yield 2; // Dusri value
//     console.log("Dusre yield ke baad...");
//     yield 3; // Tisri value
//     console.log("Generator khatam ho gaya.");
// }

// const counter = countingGenerator(); // Generator function ko call karte hi ek iterator milta hai

// console.log(counter.next()); // { value: 1, done: false }
// console.log(counter.next()); // { value: 2, done: false }
// console.log(counter.next()); // { value: 3, done: false }
// console.log(counter.next()); // { value: undefined, done: true }

// Example 1
// const user = { name: "Ali", address: { city: "Karachi" } };

// console.log(user.address.city); // "Karachi"
// console.log(user.profile.city); // Error: Cannot read properties of undefined

// console.log(user?.address?.city); // "Karachi"
// console.log(
//   user?.address?.city == undefined ? "Unavailable" : user?.address?.city
// ); // undefined

// Example 2
// const user = {
//     greet: function () {
//         return "Hello!";
//     }
// };

// // // Error if `greet` is not defined
// // console.log(user.greet()); // "Hello!"
// // console.log(user.sayBye()); // Error: user.sayBye is not a function

// console.log(user?.greet?.()); // "Hello!"
// console.log(user?.sayBye?.()); // undefined

// Example 3
// const user = [{ name: "Ali" }, null, { name: "Sara" }];

// console.log(users[0]?.name); // "Ali"
// console.log(users[1]?.name); // undefined
// console.log(users[5]?.name); // undefined

// // Benefits
// const user = { name: "Ali", address: { city: "Karachi" } };

// // // Without optional chaining
// if (user && user.address && user.address.city) {
//     console.log(user.address.city);
// }

// // // With optional chaining
// console.log(user?.address?.city);

// Eponential operator
// Example
// console.log(8 ** -1); // 8
// console.log(Math.pow(8, 4)); // 8

// Module in js

// 1. Named Exports and Imports
// Export multiple values
// file 1
// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;

// // file 2
// import { add, subtract } from './math.js';

// console.log(add(5, 3));       // 8
// console.log(subtract(5, 3));  // 2
// file 1

//2. Default Export and Import
// Export a single default value
// export default function greet(name) {
//     return `Hello, ${name}!`;
// }
// // file 2
// // Import the default export
// import greet from './greet.js';

// console.log(greet('Ali')); // Hello, Ali!

//  Combination of Default and Named Exports

// Export (in utils.js):

// export const multiply = (a, b) => a * b;
// export const divide = (a, b) => a / b;
// export default function square(a) {
//     return a * a;
// }

// Import (in app.js):

// import square, { multiply, divide } from './utils.js';

// console.log(square(4));       // 16
// console.log(multiply(4, 2));  // 8
// console.log(divide(4, 2));    // 2

// Benefits of Using Modules:
// Maintainability:

// Code is easier to read and maintain when split into logical units.
// Reusability:

// Modules can be reused across different projects or files.
// Avoid Global Scope Pollution:

// Modules keep code private unless explicitly exported.
// Improved Debugging:

// Errors in modularized code are easier to isolate and fix.
// Lazy Loading:

// Modules support on-demand loading for better performance.

//Advanced Module Features:

// Renaming Imports/Exports:

// export { add as addition }; // Renaming while exporting
// import { addition } from './math.js'; // Renaming while importing
// Import All:

// import * as MathOperations from './math.js';

// console.log(MathOperations.add(5, 3)); // 8
// console.log(MathOperations.subtract(5, 3)); // 2
// Dynamic Imports:

// Modules can be loaded dynamically at runtime using import().

// import('./math.js').then(module => {
//     console.log(module.add(5, 3)); // 8
// });

// Using Modules in Browsers:
// Add the type="module" attribute to your <script> tag:

// <script type="module" src="app.js"></script>
// import greet, { add as sum, subtract } from "./utils.mjs";
// // import greet from "./utils.js";

// console.log(sum(2, 3));
// console.log(subtract(7, 3));
// console.log(greet("Abdullah"));

// For of

// 1. Iterating Over an Array

// const fruits = ["apple", "banana", "cherry"];

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// 2. Iterating Over a String

// const text = "hello";

// for (const char of text) {
//   console.log(char);
// }

// For in loop
//for...in: Iterates over enumerable / property key properties of an object (keys).

// const array = ["a", "b", "c"];
// for (const index in array) {
//     console.log(index); // outputs the indices: 0, 1, 2
//   }

// const person = {
//     name: "John",
//     age: 30
//   };

//   for (const key in person) {
//     console.log(key); // Output: "name", "age"
//   }

// Promises in js

// Example 01
// const promise = new Promise((resolve, reject) => {
//     let success = true; // Yeh aap ke kaam ki status ko represent karta hai

//     if (success) {
//       resolve("Kaam successful hua!");  // Agar kaam successful ho jaye toh "resolve" hota hai
//     } else {
//       reject("Kaam mein kuch problem aayi!"); // Agar kaam fail ho jaye toh "reject" hota hai
//     }
//   });

//   promise.then((message) => {
//     console.log(message);  // Agar promise resolve ho jaye toh yeh run karega
//   }).catch((error) => {
//     console.log(error);  // Agar promise reject ho jaye toh yeh run karega
//   });

// Example 02
//Asynchronous Operation ka Example:

// const fetchData = new Promise((resolve, reject) => {
//     let dataFetched = true; // Maan lo data mil gaya

//     setTimeout(() => {
//       if (dataFetched) {
//         resolve("Data mil gaya!"); // Agar data mil gaya
//       } else {
//         reject("Data nahi mila!"); // Agar data nahi mila
//       }
//     }, 2000); // 2 second ka delay hai
//   });

//   fetchData
//     .then((message) => {
//       console.log(message);  // "Data mil gaya!" print hoga
//     })
//     .catch((error) => {
//       console.log(error);  // Agar data nahi mila toh "Data nahi mila!" print hoga
//     });

//Example 03
// Promises Chaining:
//Agar aapko multiple promises ko sequence mein run karna hai, toh aap promise chaining ka use karte hain.

// const promise1 = new Promise((resolve) => {
//     resolve("First kaam complete!");
//   });

//   const promise2 = new Promise((resolve) => {
//     resolve("Second kaam complete!");
//   });

//   promise1
//     .then((result1) => {
//       console.log(result1);  // "First kaam complete!"
//       return promise2; // Chaining ke liye promise2 ko return kar rahe hain
//     })
//     .then((result2) => {
//       console.log(result2);  // "Second kaam complete!"
//     })
//     .catch((error) => {
//       console.log(error);  // Agar koi error aaye toh yeh run karega
//     });

// Example 4
//Async/Await - Promises ko simplify karna:
// async function fetchData() {
//   let dataFetched = true;

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (dataFetched) {
//         resolve("Data mil gaya!");
//       } else {
//         reject("Data nahi mila!");
//       }
//     }, 2000);
//   });

//   try {
//     const result = await promise; // Await means yeh wait karega jab tak promise resolve ho na jaye
//     console.log(result); // "Data mil gaya!"
//   } catch (error) {
//     console.log(error); // Agar koi error aaye toh yeh run karega
//   }
// }

// const getData = async () => {
//   const myPromise = new Promise((pass, fail) => {
//     let success = true;
//     if (success) {
//       pass("Pass hogya");
//     } else {
//       fail("fail hogya");
//     }
//   });
//   try {
//     let response = await myPromise;
//     console.log(response, "res");
//   } catch (e) {
//     console.log(e, "error:");
//   }
// };

// getData()

// fetchData();

// all() Method

// let promise1 = new Promise((resolve) =>
//   setTimeout(resolve, 1000, "Data from API 1")
// );
// let promise2 = new Promise((resolve) =>
//   setTimeout(resolve, 2000, "Data from API 2")
// );
// let promise3 = new Promise((resolve, reject) =>
//   setTimeout(reject, 1500, "Data from API 3")
// );

// Promise.all([promise1, promise2, promise3])
//   .then((results) => {
//     console.log(results); // ['Data from API 1', 'Data from API 2', 'Data from API 3']
//   })
//   .catch((error) => {
//     console.error("Error:", error); // If any promise is rejected
//   });

// race() method
// let promise1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'Fast data'));
// let promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Slow data'));

// Promise.race([promise1, promise2])
//   .then(result => {
//     console.log(result);  // 'Fast data', since promise1 resolves first
//   })
//   .catch(error => {
//     console.log('Error:', error);
//   });

// allSettled method

// let promise1 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 1000, "Success")
// );
// let promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 2000, "Failure")
// );

// Promise.allSettled([promise1, promise2]).then((results) => {
//   //   console.log(results);
//   results.forEach((result) => {
//     console.log(result);
//     console.log(result.status); // 'fulfilled' or 'rejected'
//     console.log(result.value || result.reason); // The result or error
//   });
// });

// any()

// let promise1 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'Failure 1'));
// let promise2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Success'));

// Promise.any([promise1, promise2])
//   .then(result => {
//     console.log(result);  // 'Success'
//   })
//   .catch(error => {
//     console.log(error);
//   });

// Fetch Syntax

// fetch('URL')
//   .then(response => {
//     // Response kaam karega
//   })
//   .catch(error => {
//     // Error handle karega
//   });

// Example 1

// Get method:
// fetch('https://api.example.com/weather')
//   .then(response => {
//     if (!response.ok) { // Agar response theek nahi hai
//       throw new Error('Data nahi mila');
//     }
//     return response.json(); // JSON data ko parse karo
//   })
//   .then(data => {
//     console.log('Weather Data:', data); // API ka data yahan milega
//   })
//   .catch(error => {
//     console.error('Error:', error); // Agar kuch galti ho gayi
//   });

// Post method:
// fetch('https://api.example.com/submit', {
//     method: 'POST', // HTTP method
//     headers: {
//       'Content-Type': 'application/json' // Bata raha hai ki hum JSON data bhej rahe hain
//     },
//     body: JSON.stringify({ // Data bhejne ke liye
//       name: 'Ali',
//       age: 23
//     })
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Server Response:', data);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
