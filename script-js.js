/*Datatype - To know what kind of data we are storing inside the variable and manipulate in js
 types
      *Primitive Datatype
      *non-primitive datatype
primitive datatype - it holds only one value at a time
 *string
 *number
 *boolean
 *undefined
 *null
Non-primitive datatype -it holds multiple value at same time
*array
*object
*array of an object
*map
*set
*function
*/


// String - it is a group of characters.String can be created by two ways namely
// 1.String literal way
let courseName = "java"
console.log(courseName);
console.log(typeof courseName);
// 2.string constructor way
let courseMode = new String('python');
console.log(courseMode);
console.log(typeof courseMode);

// number 
// 1.String literal way
let courseFee = 20000
console.log(courseFee);
console.log(typeof courseFee);
// 2.string constructor way
let rollno = new Number(49);
console.log(rollno);
console.log(typeof rollno);

// Boolean - true or false 
// 1.Boolean literal way
let iscourseFree = false
console.log(iscourseFree);
console.log(typeof iscourseFree);
// 2.Boolean constructor way
let isitraining = new Boolean(false);
console.log(isitraining);
console.log(typeof isitraining);

// undefined - undefined is not an error. it is an datatype. not defined is an error.
let course;
console.log(typeof course);

// null - empty
let clash = null;
console.log(typeof clash);



