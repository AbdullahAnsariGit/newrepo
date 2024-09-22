// var num= Number(prompt("Enter the Integer"));

// for (var i = 1; i <= 10; i++) {
//   console.log(`${num} x ${i} = ${num*i}`);
// }

//  Program for find fruit
// Add product in shop
// var fruitQty = Number(prompt("Enter qty of fruit")); // 5
// var fruitShop = [];
// for (var i = 1; i <= fruitQty; i++) {
//   fruitShop.push(prompt(`Enter ${i} fruit`));
// }

// console.log(fruitShop);

// var userInput = prompt("Enter a fruit name you want");
// // var fruitAvailable = ["Banana", "Apple", "Mango", "Graphs"];
// var isFruit = false;

// for (var i = 0; i < fruitShop.length; i++) {
//   if (userInput === fruitShop[i]) {
//     isFruit = true;
//     break;
//   }
// }

// if (isFruit === true) {
//   console.log("Fruit is available");
// } else {
//   console.log("Fruit is not available");
// }

// var a = ["Banana", "Apple", "Mango", "Graphs"];
// console.log(a[1]);

// NastedIfElse
// var age = Number(prompt("Enter your age"));
// if (age <= 18) {
//   var bform = prompt("Do you've b-form, Yes/No");
//   if (bform == "Yes") {
//     alert("Eligible");
//   } else {
//     alert("Not Eligible");
//   }
// } else if (age > 18) {
//   var cnic = prompt("Do you've Cnic, Yes/No");
//   if (cnic == "Yes") {
//     alert("Eligible");
//   } else {
//     alert("Not Eligible");
//   }
// } else {
//   console.log("No");
// }

var table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < table.length; i++) {
  for (var j = 0; j < value.length; j++) {
    console.log(`${table[i]} X ${value[j]} = ${table[i] * value[j]}`);
  }
}
