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

// Function name should start with Capital chars
// Use new keyword and this

// function students(name, rollNo, age) {
//   this.name = name;
//   this.rollNo = rollNo;
//   this.age = age;
// }

// var myStd = new students("bilal", 123456, 20);
// var myStd2 = students("affan", 123456, 18);

// console.log(myStd);
// console.log(myStd2);

// var plan1 = {
//   name: "Basic",
//   price: 4,
//   space: 100,
//   transfer: 1000,
//   pages: 10,
//   discountMonths: [0, 7, 10, ],
//   //   January,
//   //   Augest,
//   //   November,
// };

// function calcAnnual(percentIfDisc) {
//   var bestPrice = plan1.price; // 4
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

// function Plan(name, price, space, transfer, pages, discountMonths) {
//   this.name = name;
//   this.price = price;
//   this.space = space;
//   this.transfer = transfer;
//   this.pages = pages;
//   this.discountMonths = discountMonths;
//     this.calcAnnual = function (percentIfDisc) {
//       var bestPrice = this.price;

//       var currDate = new Date();
//       var thisMo = currDate.getMonth();
//       for (var i = 0; i < this.discountMonths.length; i++) {
//         if (this.discountMonths[i] === thisMo) {
//           bestPrice = this.price * percentIfDisc;
//           break;
//         }
//       }
//       return bestPrice * 12;
//     };
// }

// Plan.prototype.calcAnnual = function (percentIfDisc) {
//   var bestPrice = this.price;

//   var currDate = new Date();
//   var thisMo = currDate.getMonth();
//   for (var i = 0; i < this.discountMonths.length; i++) {
//     if (this.discountMonths[i] === thisMo) {
//       bestPrice = this.price * percentIfDisc;
//       break;
//     }
//   }
//   return bestPrice * 12;
// };

// var p1 = new Plan("Basic", 3.99, 100, 1000, 10, [6, 7]);
// var p2 = new Plan("Premium", 5.99, 500, 5000, 50, [6, 7, 11]);
// var p3 = new Plan("Ultimate", 9.99, 2000, 20000, 500, [6, 7]);
// var p3 = new Plan("Ultimate", 9.99, 2000, 20000, 500, [6, 7]);

// console.log("p1", p1);
// console.log("p2", p2);
// console.log("p3", p3);

// var annualPrice = p1.calcAnnual(0.9);
// var annualPrice1 = p2.calcAnnual(0.85);
// var annualPrice2 = p3.calcAnnual(0.7);

// console.log("annualPrice", annualPrice);
// console.log("annualPrice", annualPrice1);
// console.log("annualPrice", annualPrice2);

var obj = {
  name: "alex",
  age: 12,
  class: 5,
};

// var isAvailable = "alex" in obj;

// console.log(isAvailable);



const person = {
  fname: "John",
  lname: "Doe",
  age: 25,
};


// person['lname']

// for (let x in person) {
//   console.log(x);
//   console.log(person[x]);

// }


