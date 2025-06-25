/*
Type conversion : The process of changing datatype is known as type conversion

this can done by 3 datatypes:
   -string
   -number
   -boolean

Conversion can be converted into,
 -convert numeric string into number
     *number constructor
     *modern js(+)
     *parseInt
     *parsefloat
 -convert number into string
 -convert any number into boolean

*/

console.log("***convert numeric string into number***");

let numericstring = "2025";
console.log(numericstring);
console.log(typeof numericstring);


// Using number constructor
console.log("***Using number constructor***");

let num = Number(numericstring)
console.log(num);

// modern-js (+)
console.log("***modern-js (+)***");
console.log(+numericstring);

// parseInt
console.log("****parseInt****");
console.log(parseInt(numericstring));

// parseFloat
console.log("****parseFloat****");
console.log(parseFloat(numericstring));



// convert number into string
// Using string constructor
console.log("**Using string constructor**");
let a=10;
console.log(a);

let aa=String(a);
console.log(aa);


// Using Tostring
console.log("***Using Tostring**");

b=20
console.log(b.toString());

// convert any number into boolean
console.log("************Boolean*************");

/*falsy values
   -empty string
   -null
   -Nan
   -undefined
   - 0
   - -0
 */
console.log(Boolean(""));
console.log(Boolean(1));


console.log("**********type coercion**************");
// Addition with type coercion
console.log(3+'3');
console.log('hello'+3);
console.log(3+2+'hello'+2+3);//after the string it doesn't add the values it always concatinate the value.

// Concatination 

let courseName = 'JS development';
let courseFee = 30000;
let courseMode = 'Online';
let place = 'BTM';
let trainer = 'Sam'

console.log("****Concatination****");

console.log("I am "+trainer+ " I am taking class called " +courseName+ " and the mode of the class is " +courseMode+ " in " +place+ " the fees of the course is " +courseFee);

console.log("**********template literal or string literal**********");

console.log(`I am ${trainer} I am taking class called ${courseName} and the mode of the class is ${courseMode} in ${place} the fees of the course is ${courseFee}`);








