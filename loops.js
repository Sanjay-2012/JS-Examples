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
 let course="JavaScript";
for( let i=0; i<course.length; i++){
    console.log(course[i]);
}

// while loop - It is control flow statement that allows block of code to be executed repeatedly as long as the specified condition is true.
console.log("************while loop***************");

let courseName = "java";
i=0;
while(i<courseName.length){
    console.log(courseName[i]);
    i++;
}

// The do-while loop - It is a control flow statement that executes a block of code at least once, and then repeatedly executes the block as long as a specified condition evaluates to true.
console.log("************do-while loop***************");
let courseMode = "online";
i=0;
do{
    console.log(courseMode[i]);
    i++;
}while(i<courseMode.length)