/*
Statement: 

    - Statements are used to control the flow of execution based on certain condition.

In JS 4 types of Statements.

    - if statement
    - if-else statement
    - else-if statement
    - switch case statement.

*/

/* 

Note: 

    - If my condition is true let me print the if block
    - If my condition is false let me print the else part.

*/

// Example for if statement

console.log("Example for if statement");

if(10>3){
    console.log(`10 is greater than 3`);
}


console.log("Example for if-else statement");

let x = 50;
let y = 30;

if(x>y){
    console.log(`The ${x} value is greater than ${y} - True`);
}else{
    console.log(`The ${y} value is greater than ${x} - False`);

}

// Else-if statement


console.log("Example for else-if statement");

let laptopPrice = 8000;

if(laptopPrice >= 60000){
    console.log('Under 20k+ you will get the mobile is Infinix Note 50s 5G+ (Marine Drift, 128 GB)  (6 GB RAM)');
} else if(laptopPrice >= 15000 && laptopPrice <= 19000 ){
    console.log(`Under 19k you will get the mobile Samsung Galaxy A35 5G (Awesome Navy, 128 GB)  (8 GB RAM)`);
}
else if(laptopPrice >= 13000 && laptopPrice <= 15000 ){
    console.log(`Under 13k to 15k you will get the mobile realme P3x 5G (Lunar Silver, 128 GB)  (6 GB RAM)`);
}
else if(laptopPrice >= 9000 && laptopPrice <= 13000 ){
    console.log(`Under 9k to 13k you will get the mobile Lenovo K8 Note (Fine Gold, 32 GB)  (3 GB RAM)`);
}
else{
    console.log(`Sorry... visit next time with your dream mobile.. `);
    
}


console.log("Example for switch statement");

//  Example for Switch case

let brand  = 'hp';
switch(brand){
    case 'dell':
        console.log('We are using dell laptop');
    break;
     case 'lenevo':
        console.log('We are using lenevo laptop');
    break;
     case 'hp':
        console.log('We are using hp laptop');
    break;
     case 'samsung':
        console.log('We are using samsung laptop');
    break;
    default:
        console.log('Sorry we are not able to find out your laptop.. ');
}