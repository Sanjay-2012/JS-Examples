/* Array - It is used to store multiple values in single variable
        It is non-primitive datatype
        It is enclosed by square brackets
        
  Ways to create a Array
     1.literal way
     2.constructor way */

// 1.literal way 
let fruits = ["apple", "banana", "cherry"];
console.log(typeof fruits); 
console.log(fruits);  

// To extract all the letters as per the position from the variable - older way
console.log("---older way---");

console.log(fruits[0]); 
console.log(fruits[1]); 
console.log(fruits[2]);  

//Using Loops
console.log("----Using Loops----");
for(let i=0;i<=2;i++){
    console.log(fruits[i]);   
}

// Constructor way
// string constructor Way
console.log("---- Constructor Way----");
let fruits1 = new Array("apple", "banana", "cherry");
console.log(fruits1);
console.log(typeof fruits1);

// Array Methods

let car = ['creta','baleno','glanza','bolero']
console.log(car);

// 1.push() add the element in last.
car.push('breeza');
console.log(car); // (4) ['creta', 'baleno', 'glanza', 'bolero']

// 2.pop() remove the last element
car.pop();
console.log(car); // (5) ['creta', 'baleno', 'glanza', 'bolero', 'breeza']

// 3.unshift () adds the element in first and disturbs the element's position
car.unshift("breeza");
console.log(car); // (5) ['breeza', 'creta', 'baleno', 'glanza', 'bolero']

// 4.shift() remove the element in first
car.shift();
console.log(car); // (4) ['creta', 'baleno', 'glanza', 'bolero']

// 5.splice (start , delete an element , add new element) Adds/removes elements at any position
car.splice(1,0,'swift','thar');
console.log(car); // (6) ['creta', 'swift', 'thar', 'baleno', 'glanza', 'bolero']

// 6.reversed
car.reverse();
console.log(car); // (6) ['bolero', 'glanza', 'baleno', 'thar', 'swift', 'creta']

//7.concat() (it create new array) 	Merges arrays into a new one
let names = ['sanjay','gowtham','ragul','ajith']
console.log( car.concat(names)); // (10) ['bolero', 'glanza', 'baleno', 'thar', 'swift', 'creta', 'sanjay', 'gowtham', 'ragul', 'ajith']

// 8.indexOf()
console.log(car.indexOf("creta")); // 5

// 9.includes() true/false
console.log(car.includes("thar"));  // true

// 10.join() 
console.log(car.join());  // bolero,glanza,baleno,thar,swift,creta






