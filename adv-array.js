// Advanced Array Methods

/*
for each()
     Runs a function for each array element. Doesn't return a new array.Input is array but ouput would be anything.
 syntax;
 array.forEach(function(element, index, array) {
    // code to run on each element
});
*/
console.log("***For Each***");

let nums = [1, 2, 3];
nums.forEach((n) => console.log(n * 2)); // 2, 4, 6


/*
.map()
Creates a new array with transformed values.Input and Output both are array.It has return value
*/
console.log("***Map()***");

let num = [1, 2, 3];
let numbers=num.map((n) => n * 2); 
console.log(numbers); //[2, 4, 6]

/*
.filter()
	Creates a new array with elements that pass a test (condition).
*/ 
console.log("***filter()***");

 let arr2=[1,2,3,4,5,6,7,8];
 let even=arr2.filter((n)=>n%2==0);
 console.log(even);
 
 /*
 reduce()
    Reduces the array to a single value (e.g., sum, average, etc.).
 */

console.log("***reduce()***");

let arr3=[1,2,3,4,5,6,7,8,9,10];
let sum = arr3.reduce((arr,cur)=> arr+cur,0);
let avg = sum/arr3.length;
console.log(sum); //55
console.log(avg); //5.5

/*
find()
  	Returns the first element that satisfies a condition.
*/
let arr4=[12,54,76,34,56];
let find=arr4.find(ele=>ele>45);
console.log(find); //54

/*
some()
	Returns true if any element passes the test.
every()
	Returns true if all elements pass the test.
*/
let ages = [16, 18, 20];
console.log(ages.some(age => age >= 18));  // true
console.log(ages.every(age => age >= 18)); // false



