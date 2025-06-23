/* variables are containers which contains a value
 They are 3 types
       *var
       *let
       *const
var 
 -var can support declaring variable
 -var can support assign a value
 -var can support re-declaring variable
 -var can support re-assign a value
 
 let
 -let can support declaring variable
 -let can support assign a value
 -let doesn't support re-declaring variable
 -let can support re-assign a value
 
 Const
 -const can support declaring variable
 -const can support assign a value
 -const doesn't support re-declaring variable and re-assign a value
 */ 

// This is your JS file
console.log("var keyword");
var courseName; //declaring variable
courseName = "java";  //assign a value
console.log(courseName);
var courseName;
courseName = "Python";//re-declaring variable
console.log(courseName);//re-assign a value

 console.log("let keyword");
 let courseFee = 20000;
 console.log(courseFee);

 console.log("const keyword");
 const courseMode = "Offline";
 console.log(courseMode);
 