/*Destructuring:
    used extract values from the arrays and objects , then assign them to the variables in convenient way.

    [] - to perform array destructuring
    {} - to perform object destructuring
*/ 

/*swap of two numbers using array destructuring

let a=10;
let b=90;

console.log(a);
console.log(b);

[a,b] = [b,a]

console.log(a);
console.log(b);

*/ 


/* swap of elements in array using array destructuring

let arr = ["Dog","Cow","cat","birds"];

[arr[0],arr[3]] = [arr[3],arr[0]];

console.log(arr);

*/


/*Assign Array values into variables

let arr1 = ["Dog","Cow","cat","birds"];

let [firstAnimal , secondAnimal , thirdAnimal,...extra] = arr1;

console.log(firstAnimal);
console.log(secondAnimal);
console.log(thirdAnimal);
console.log(extra);

*/ 


/*extract values from objects

let person1 = {
    firstName : "Sam",
    lastName : "Cs",
    age:32,
    job : "music director"
}

let person2 = {
    firstName : "raja",
    lastName : "dev",
    age:32,
}

let {firstName,lastName,age,job = "unemployee"} = person2//person1

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

*/ 


/* Destructuring in function parameters


function details({firstName,lastName,age,job="unemployed"}) {
    console.log(`name : ${firstName} ${lastName}`);
    console.log(`age : ${age}`);
     console.log(`job : ${job}`);
}
let person1 = {
    firstName : "Sam",
    lastName : "Cs",
    age:32,
    job : "music director"
}

let person2 = {
    firstName : "raja",
    lastName : "dev",
    age:32,
}
details(person2);

// Rename the variables 
const obj = {
  name: "Sanjay",
  details: {
    city: "Trichy",
    pin: 620001
  }
};

obj.details.city="NKL"
console.log(obj);

const {details: { city, pin }} = obj;    //(city: place) here city is renamed as place 
const{name:username} = obj;
console.log(username,place, pin);
*/


/////////////////////////////////SPEARD OPERATOR /////////////////////////////////////////////////////


/* Speard operator
       The spread operator (...) is used to "spread out" the elements of an array or properties of an object into individual elements.
 */


/* Using Speard operator with arrays

let num = [1, 2, 3, 4, 5]
let max = Math.max(...num);

console.log(max);


let n = [1, 2, 3, 4, 5]
let min = Math.min(...num);

console.log(min);

// separate the string
let name = "Sanjay"
let letters = [...name];

console.log(letters);

// merge the two arrays

let arr1 = ["Dog","Cow","cat","birds"];
let arr2 = ["lion","horse","tiger"]
let data = [...arr1,...arr2];

console.log(data);

*/


/* Using speard operator with objects

let person1 = {
    firstName : "Sam",
    lastName : "Cs",
    age:32,
    job : "music director"
}

let newuser = {...person1};
console.log(newuser);


// override the object values or properties

let update = {...person1,age:35};
console.log(update);


// merge the objects

let person = {
    firstName : "raja",
}

let age = {
    lastName : "dev",
}

let name = {...person,...age};
console.log(name);
*/


/* Rest Parameter / Rest pattern
   Used to gather multiple values into an array, especially in function parameters or destructuring. 

Rest pattern :
let names = ['dog', 'cat', 'birds', 'cow', 'monkey', 'lion'];

let [eleOne, eleTwo, ...others] = names;
console.log(eleOne);
console.log(eleTwo);
console.log(others);


// Rest parameter:
function user(userOne, userTwo, ...restPara) {
    console.log(userOne);
    console.log(userTwo);
    console.log(restPara);

}
user('Sanjay', 'hari', 'nithish', 'kathir', 'dhiva', 'ragul')


// let [a,b,c=10,d=20] = [1,2]
// console.log(a,b,c,d);

// Nested arrays:

let [, [, c], [, [, f]]] = [1, [2, 3], [4, [5, 6]]] // 3,6

console.log(c, f);
*/


/* Difference b/w speard and rest

speard - expands the array into separate element
rest - bundles separate element into an array


function sum(...nums) {     // ✅ Rest Parameter
  console.log(nums);        // → [1, 2, 3]
}
sum(1, 2, 3);

// Rest = Receiving side, used in parameter list or destructuring to gather values.

const numbers = [1, 2, 3];
sum(...numbers);            // ✅ Spread Operator

 Spread = Sending side, used to pass or expand individual values.
 */