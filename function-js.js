/* 
Function - Function is a block of code is designed to perform specific task. 

syntax:
   function function_name(){
   //function body
 }
   
*/

// Example for function

function add(){
    let a=30;
    let b=40;
    let sum=a+b;
    console.log(sum);  
}add() 

// Parameter - parameter is a variable that is define in function to accept the values when the function is called.

// Basic functions

// function without parameter 
 function message(){
    let msg = "hello";
    console.log(msg); 
 }message()

//  function with parameter
function details( name , age){
   console.log(name);
   console.log(age);  
}details("sanjay" , 23)

// function with default parameter (we can modify the default parameter)
function dress(price , dis_count = 20) {
   final_price = price - (price * dis_count/100);
   console.log(final_price);
}dress(1000)
dress(1000 ,50)

/*Return Statement 
         The return statement is used to send back the value where the function is called.
key points:
      - It returns any value like string , numbers , array.
      - After return, no more code inside that function is run.
      - A function stops immediately when return is executed.
      - If you don’t use return, the function returns "undefined" by default in JavaScript.
*/ 
function greet() {
   return("Good Morning")
}console.log(greet());

function addition(num1,num2){
   return num1+num2;
}console.log(addition(50,50));

function ad(num1,num2){
   // return num1+num2;
}console.log(ad(50,50)); //undefined,Because return is not use.

