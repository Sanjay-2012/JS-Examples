/* Object - Object is a collections of key-value pairs . key is always string and value can be any datatype.

Object can be created by 4 ways
 - literal way
 - constructor way
 - constructor function
 - object.create() way
   syntax:
      k_w object_name{
       key1 : value1;
       key2 : value2;
       .
       .
       keyn : value n;
       }
*/ 

// Object literal way
let personDetails = {
    name : "sanjay",
    age : 20,
    Course : 'JFS',
    place : 'Bangalore'
}
// To get all the values from the object
console.log(personDetails);

// creating Object using constructor way
let personDetail = new Object();
personDetail.name = "sam",
personDetail.age = 22

console.log(personDetail);

// There are two ways to access an properties from an object.
//  1. Dot Notation : Static 
console.log(personDetails.age);

// 2.Brackets Notation : Dynamic
console.log(personDetail ["name"]);

// To Add or Modify or Delete the existing properties from an object

// Add an element
personDetails.Mode = 'Online';
console.log(personDetails);

// MOdify an element 
personDetails.Course = "PFS";
console.log(personDetails);

// delete an item
delete personDetails.Mode;
console.log(personDetails);

// Object Methods
// Static Methods

// 1.Object.keys(obj)	 Returns array of property names
console.log(Object.keys(personDetails));

// 2.Object.values(obj)	 Returns array of property values
console.log(Object.values(personDetails));

// 3.Object.entries(obj)	Returns array of key-value pairs
console.log(Object.entries(personDetails));

// 4.Object.assign(obj1, obj2)	Copies properties from obj2 to obj1
console.log(Object.assign(personDetail,personDetails));

// 5.Object.hasOwnProperty(prop)	Checks if property exists in object
console.log(Object.hasOwnProperty('city'));

// 6.Object.freeze(obj)	Makes object immutable
console.log(Object.freeze(personDetails));

// personDetails.age = 25;
// console.log(personDetails);

// 7.Object.seal(obj)	Prevents adding/removing properties , but allows modifying the existing properties
console.log(Object.seal(personDetail));

// personDetail.name="mahi";
// personDetail.city="chennai";
 console.log(personDetail);

// 8.hasOwn
console.log(personDetail.hasOwnProperty('city'));


// Predefined Method
// Math.ceil()
console.log(Math.ceil(123.90));

// Math.floor()
console.log(Math.floor(123.87));

// Math.round()
console.log(Math.round(123.97));

//Math.max()
console.log(Math.max(1,2,3,4,5,6,7,8,9));

//Math.min()
console.log(Math.min(1,2,3,4,5,6,7,8,9));

//Date
let date = new Date();
console.log(date);
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getMonth());