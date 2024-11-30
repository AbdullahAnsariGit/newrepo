var a = 10;
function f() {
  var b = 20;
  console.log(a, b);
}
f();
console.log(a);

function f() {
  var a = 10;
  console.log(a);
}
f();

console.log(a);

var a = 10;

// User can re-declare
// variable using var
var a = 8;

// User can update var variable
a = 7;
console.log(a);

console.log(a);
var a = 10;

//Let
let a = 10;
function f() {
  let b = 9;
  console.log(b);
  console.log(a);
}
f();

let a = 10;
function f() {
  if (true) {
    let b = 9;

    console.log(b);
  }

  console.log(b);
}
f();

// It prints 10
console.log(a);

let a = 10;

// It is not allowed
let a = 10;

// It is allowed
a = 10;

let a = 10;
if (true) {
  let a = 9;
  console.log(a); // It prints 9
}
console.log(a); // It prints 10

console.log(a);
let a = 10;

// Const
const a = {
  prop1: 10,
  prop2: 9,
};

// It is allowed
a.prop1 = 3;

// It is not allowed
a = {
  b: 10,
  prop2: 9,
};

console.log(a);

var a = "alex";

// Helpful Resources:

// https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/
// https://blog.coolhead.in/difference-between-function-scope-and-block-scope-in-javascript
// https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
