/* Loops is designed to execute block of code repeatdly until specified condition is met.
  Types:
      For loop
      while loop
      do-while loop
      for-in-loop
      for-each-loop
*/
// for loop - It is control flow statement that allows  block of code to be executed repeatedly a specific number of times.
console.log("************for loop***************");
let course = "JavaScript";
for (let i = 0; i < course.length; i++) {
    console.log(course[i]);
}

// while loop - It is control flow statement that allows block of code to be executed repeatedly as long as the specified condition is true.
console.log("************while loop***************");

let courseName = "java";
i = 0;
while (i < courseName.length) {
    console.log(courseName[i]);
    i++;
}

// The do-while loop - It is a control flow statement that executes a block of code at least once, and then repeatedly executes the block as long as a specified condition evaluates to true.
console.log("************do-while loop***************");
let courseMode = "online";
i = 0;
do {
    console.log(courseMode[i]);
    i++;
} while (i < courseMode.length);



/*For-in loop - It is a control structure that allows you to loop through the keys (property names) of an object.it is used for objct.
syntax
   for (variable in object) {
  // code to be executed for each property
}
*/
console.log("******* For-in loop **********");

let person = {
    name: "Sanjay",
    age: 30,
    city: "prp"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}


/*The forEach() method is used to execute a function once for each element in an array.
 It's used only with arrays (not objects).
 syntax;
 array.forEach(function(element, index, array) {
    // code to run on each element
});
 */ 
console.log("******* For-each loop **********");
let animals =["cat","dog","camel","cow","goat"]
animals.forEach(function(animals) {
    console.log(animals);
});

/*
for of
for...of is used to go through each item in things like arrays and strings — but not plain objects.

Syntax:
for (let element of iterable) {
    // code to execute for each element
}
*/
console.log("*****For of******");

let color = ["red","blue","grey","orange"];

for(let colour of color){
    console.log(colour);
}
