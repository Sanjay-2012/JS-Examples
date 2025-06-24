/* Operators are symbols or keywords which is used to perform specific tasks on values and variables
 types:
    1.arithmetic operator
    2.assignment operator
    3.comparison operator
    4.logical operator
*/

// arithmetic operator (+,-,*,/,%,++,--)
console.log("arithmetic operator");

let a = 20;
let b = 10;
let c = a + b;
console.log(c);

let aa = 20;
let bb = 10;
let cc = aa - bb;
console.log(cc);

let a1 = 20;
let b2 = 10;
let c3 = a1 * b2;
console.log(c3);

let a2 = 20;
let b1 = 10;
let c2 = a2 / b1;
console.log(c2); // division is q.

let aaa = 20;
let bbb = 10;
let ccc = aaa % bbb;
console.log(ccc); //modulus is remainder.

console.log("increment and decrement");


/*++ - is increment it has two types: prefix,postfix
prefix is increment the value before it is used in the expression 
postfix is first assign the value then it is incremented */

let x = 10;//prefix
// ++x;
console.log(++x);

let xx = 20;
console.log(xx++);

// xx++;postfix
console.log(xx);

/*-- - is decrement it has two types: prefix,postfix
prefix is decrement the value before it is used in the expression 
postfix is first assign the value then it is decremented */

let f=8;
console.log(--f);


let xj = 20;
console.log(xj--);

xj--; //postfix
console.log(xj);


///////Assignment operator(=,+=,-=,*=,/=,%=)
console.log("Assignment operator");
let q = 10;
console.log(q);

let w = 2;
w += 10;
console.log(w);

let e = 10;
e -= 5;
console.log(e);

let r = 10;
r *= 5;
console.log(r);

let t = 10;
t /= 5;
console.log(t);

let y = 10;
y %= 5;
console.log(y);

// comparison Operator (==,===,<=,>=,!=,>,<)
console.log("Comparison operator");
console.log("5" == 5); // == is loosely it checks only value and not datatype.
console.log("5" === 5); // === is strict it checks both datatype and values.
console.log(7 >= 5);
console.log(6 <= 5);
console.log(6 != 5);

console.log("Logical operator");

/* logical operator (and (&&) , or (||))
 And (&&) : it returns true when both elements are true otherwise it shows false.
 or (||): it returns true if it has any one of the value is true otherwsie it shows false. */

console.log(5 >= 5 && 4 != 4);
console.log(5 >= 5 && 4 == 4);


console.log(5 >= 5 || 4 != 4);
console.log(5 <= 5 || 4 != 4);
console.log(9 <= 5 || 4 != 4);