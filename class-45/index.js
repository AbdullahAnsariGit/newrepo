// var userData = {
//   name: "alex", // 54
//   fname: "hales", // 55
//   age: 12, //56
// };
// var userData2 = userData;
// userData2.age = 18;
// console.log(userData.age);
// var name = "alex";
// var name2 = name;
// name2 = "abc";
// console.log(name);

// var plan1 = {
//   name: "Basic",
//   price: 3.99,
//   space: 100,
//   transfer: 1000,
//   pages: 10,
//   discountMonths: [0, 7, 11],
//   //   January,
//   //   Augest,
//   //   November,
// };

// function calcAnnual(percentIfDisc) {
//   var bestPrice = plan1.price;
//   var currDate = new Date();
//   var thisMo = currDate.getMonth(); // 0 to 11 - 0 == january
//   for (var i = 0; i < plan1.discountMonths.length; i++) {
//     if (plan1.discountMonths[i] === thisMo) {
//       bestPrice = plan1.price * percentIfDisc;
//       break;
//     }
//   }

//   var getBody = document.querySelector("body");
//   var createEl = document.createElement("div");
//   createEl.innerHTML = bestPrice * 12;
//   getBody.appendChild(createEl);
// }

// var annualPrice = calcAnnual(0.85);

// console.log("annualPrice", annualPrice);

// var student1 = {
//   name: "bilal",
//   rollName: 271254,
//   age: 20,
// };

// var student2 = {
//   name: "aman",
//   rollName: 263071,
//   age: 17,
// };

// var student3 = {
//   name: "affan",
//   rollName: 266710,
//   age: 18,
// };

// var student4 = {
//   name: "obaid",
//   rollName: 265038,
//   age: 18,
// };

function Students(name, rollNo, age) {
  this.name = name;
  this.rollNo = rollNo;
  this.age = age;
}

var myStd = new Students("bilal", 123456, 20);
var myStd2 = new Students("affan", 123456, 18);

console.log(myStd);
console.log(myStd2);
