/*
let person = {
    name :"sanjay",
    age :20,
    show :function() {
    console.log("hello,"+ this.name);
}
};

// person.show(); // hello,sanjay

// let show = function () {
//     console.log("hello,"+ this.name); // hello undefined because we use this outside the object
// }
// show();
*/


/*Call Function
    The call() method is used to call a function and explicitly(directly) set the value of this.

Syntax:

functionName.call(thisArg, arg1, arg2, ...);

            -functionName → the function you want to call
            -thisArg → the value you want this to refer to
            -arg1, arg2, ... → arguments passed individually to the function



function details(city,age) {
    console.log(`hello I am  ${this.name} , I live in ${city} and I am ${age} years old`);  
}

let person = {
    name : "Sanjay"
};
let person1 = {
    name : "Sam"
};

details.call(person,"Trichy",20);
details.call(person1,"NKL",21);


//  details is called with this set to person
//  this.name becomes "Sanjay"

// Notes:
//     1.call() runs the function immediately
//     2.thisArg can be any object, even null or window
//     3.If you don’t set this correctly, it might refer to undefined or the global object

 
*/

/* Apply Function
     It Calls a function immediately , Allows us to set the value of "this" inside the function

Syntax:
   functionName.apply(thisArg, [arg1, arg2, ...]);

Difference 
   call() → Pass arguments separately
   apply() → Pass arguments as an array


function details(city,age) {
    console.log(`hello I am  ${this.name} , I live in ${city} and I am ${age} years old`);  
}

let person = {
    name : "Sanjay"
};
let person1 = {
    name : "Sam"
};

details.apply(person,["Trichy",20]);
details.apply(person1,["NKL",21]);

*/

/*Bind Function
 Does not call the function immediately.
 It returns a new function with a fixed this value (and optionally preset arguments).
 we can call that new function later.

Syntax:
let boundFunction = originalFunction.bind(thisArg, arg1, arg2, ...);
 


function details(city,age) {
    console.log(`hello I am  ${this.name} , I live in ${city} and I am ${age} years old`);  
}

let person = {
    name : "Sanjay"
};
let person1 = {
    name : "Sam"
};

let res=details.bind(person,"Trichy",20);
let res1=details.bind(person1,"NKL",21);

res()
res1()


*/