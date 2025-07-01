/* String - It is group of character. 
            It is enclosed with single or double quotes . 
            It is primitive datatype. It is immutable
*/ 
/*Ways to create a string
   1.literal way
   2.constructor way
*/
// String literal way
let car = "creta";
// type of 
console.log(typeof car);

// length
console.log("----Length----");
console.log(car.length);


// To extract all the letters as per the position from the variable - older way
console.log("----Older way----");

let res1 = car[0];
console.log(res1);
let res2 = car[1];
console.log(res2);
let res3 = car[2];
console.log(res3);
let res4 = car[3];
console.log(res4);
let res5 = car[4];
console.log(res5);

// Using for loop
console.log("----Using Loop----");
for(let i=0;i<=car.length-1;i++){
    console.log(car[i]);  
}

// string constructor Way
console.log("----String Constructor Way----");
let bus = new String("Pari");
console.log(bus);
console.log(typeof bus)

// String Methods
console.log("----String Methods----");
let train = "Coimbatore uday express"
console.log(train.length);
console.log(typeof train);


// 1.indexOf()
console.log(train.indexOf('a')); //5

// 2.lastIndexOf()
console.log(train.lastIndexOf('e')); //20

// 3.charAt()
console.log(train.charAt(17)); //x

// 4.charCodeAt() (ASCII value)
console.log(train.charCodeAt(0)); //67

// 5.toUpperCase
console.log(train.toUpperCase()); //COIMBATORE UDAY EXPRESS

// 6.toLowerCase
console.log(train.toLowerCase()); //coimbatore uday express

// 7.Split (The split() method is used to break a string into parts, usually to work with individual words, values, or items inside a string.)
console.log(train.split(" "));  //(3) ['Coimbatore', 'uday', 'express']

// 8.includes (true/false)
console.log(train.includes('z')); // false

// 9.replace()
console.log(train.replace('Coimbatore',"NKL"));  //NKL uday express

// 10.replaceall()
console.log(train.replaceAll('a','T'));   // CoimbTtore udTy express

// SubString
console.log(train.substring(0,10));  //Coimbatore












