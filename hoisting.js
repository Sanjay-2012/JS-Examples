/*  Hoisting :
Hoisting is a JavaScript behavior where variable and function declarations are moved to the top,before the code is executed. However, only the declarations are hoisted, not the assignments.
*/ 

/* Variable declaration

// var keyword:

console.log(a); //undefined
var a = 1;

// let and const keyword

console.log(num);
let num = 10; //Uncaught ReferenceError: Cannot access 'specific variable name' before initialization

console.log(num);
const n = 10; //Uncaught ReferenceError: Cannot access 'specific variable name' before initialization
*/ 

////////////////////////////////////////////////////////////////////////////////////////////

/* Function declaration
    Function declaration can be hoisted.but the function expression can't be hoisted . it returns the value


detail()
function detail() {
    let a=10;
    let b=10;
    let res = a+b;
    console.log(res);
}
*/

//////////////////////////////////////////////////////////////////////////////

/* Function expression 

//Using var keyword
   
//Uncaught TypeError: "variable_name" is not a function

// a();     
// var a = function () {
//     let a=10;
//     let b=10;
//     let res = a+b;
//     console.log(res);
// }


// Using const and let 

//  Uncaught ReferenceError: Cannot access 'specific variable name' before initialization

// detail()
// let detail = function () {
//     let a=10;
//     let b=10;
//     let res = a+b;
//     console.log(res);
// }

details()
const details = function () {
    let a=10;
    let b=10;
    let res = a+b;
    console.log(res);
}
*/

/*This keyword
  this keyword refers to the current element of the object.


let person= {
    name : "sanjay",
    age : 20,
    Details: function () {
        console.log(this.name);
    } 
};

person.Details();

let course = {
    name:"java",
    mode:'online',
    Details: function () {
        console.log(this.name);
    } 
}

course.Details();
*/ 




