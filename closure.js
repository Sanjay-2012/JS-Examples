/*Closure   
     It is combination of function and lexical environment.
     It is function that has access to its outer function's variables.
     Inner function have the access to use outer function's variable . But outer function can't do that.
*/


// With Closure
// Closure Example

function one() {
    let name = "Sanjay";

    function greet() {
        return "Hello " + name;
    }
     return greet; 
}

let sayHello = one();     
console.log(sayHello()); 



// WithOut Closure
// Not a Closure (or we don’t use closure)

function two() {
    let name = "Davidson";

    function greetOne() {
        return "Hello " + name;
    } 
      return greetOne(); 
}

// console.log(two());

let Hello = two();     
console.log(Hello()); 
