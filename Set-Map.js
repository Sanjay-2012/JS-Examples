/*
Set:
   Set is a collection of unique values
   Can store any datatype.
 

// Set Methods

// add() - Adds an element 

let details = new Set();

details.add("Sanjay")
details.add("Sam")
details.add("Arjun")

console.log(details);
console.log(details.size)

// Delete() - Delete as an element
details.delete("Sam")
console.log(details);


// has() - It checks if an element is exists

console.log( details.has("Sanjay"));
console.log(details.has("Sam"));

// clear() - It removes all the elements in a set

details.clear()
console.log(details);
*/




/* Map
    Map is a collection of key and objects and key can be any datatype
    More powerful than plain objects when using non-string keys


// Map Methods

let detail = new Map();

// Set(key, value) - Adds an element
detail.set("Name","Sanjay");
detail.set("Age","20");
detail.set("Degree","Bca");
detail.set("PassedOut","2025");

console.log(detail);
console.log(detail.size);

// get(key) - Returns the value for a key
console.log(detail.get("Name"));
console.log(detail.get("PassedOut"));

// has(key) - It checks the key exists or not
console.log(detail.has("Degree"));
console.log(detail.has("LastName"));

// delete() - It deletes an element
detail.delete("PassedOut")
console.log(detail);

// Clear() - It remove all the elements in Map
detail.clear();
console.log(detail);

*/

