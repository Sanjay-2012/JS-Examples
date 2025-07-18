/* In JavaScript, RegEx (Regular Expression) is a powerful tool used to match patterns in strings. It's commonly used for validation, searching, replacing, or extracting data from text.

Creating a regex
1.literal way:
    let pattern = /abc/;

2.Constructor Way:
     let pattern = new RegExp("abc");


Methods of regex
Method	  Description
test()	   Returns true or false if match is found
exec()	   Returns match result or null
match()	   Returns matches in a string (used with String)
replace()  Replaces part of the string
split()	   Splits string using a regex
search()   Returns index of first match or -1

Basic Pattern Examples
Pattern	                  Meaning	                 
/abc/	           Exact match "abc"	              
/[a-z]/	           Any lowercase letter	      
/[A-Z]/	           Any uppercase letter	    
/[0-9]/	           Any digit	"1" in "a1b2"
/\d/	           Digit (same as [0-9])	
/\w/	           Word char (letters, numbers, _)	
/\s/	           Whitespace (space, tab, \n)	
/./	               Any single character	
/^abc/	           Starts with "abc"	                  
/xyz$/	           Ends with "xyz"	                      
/a+/	           One or more "a"	                      
/a*/	          //Zero or more "a"	                 
// /a?/	           Zero or one "a"	
// /a{2}/	       Exactly two "a"	                       
// /a{2,4}/	       2 to 4 "a"	                          
// `/a	b/`	      "a" or "b"
// /(abc)/	      Grouping

/*flags
Flag	Meaning
g	     Global match (find all)
i	     Case-insensitive
m	     Multiline mode

*/

// let passwd = document.getElementById("pswd");
// let btn = document.querySelector("button")
// let msg = document.getElementById("msg")

// let password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/

// btn.addEventListener("click",(e)=>{
//     let psd = passwd.value
//     if(password.test(psd)){
//       msg.textContent="your password format is correct !!!!";
//        msg.style.color="Green"
// }
// else{
//      e.preventDefault();
//     msg.textContent="enter password format correctly";
//     msg.style.color="red"
// }
// });



// Another method


// function validation() {
//     let phnumber = document.getElementById("phone").value;
//     let btn = document.getElementById("btn");
//     let msg = document.getElementById("msg");


//     if (!phnumber.match(/^[0-9]{10}$/)) {
//         msg.innerHTML = "Invalid Number";
//         msg.style.color = "red"
//     }
//     else {
//         msg.innerHTML = "Valid Number";
//         msg.style.color = "green"
//     }
// }
// btn.addEventListener("click", validation);


    let aadharNumber = document.getElementById("aadhar");
    let btn = document.getElementById("btn");
    let msg = document.getElementById("msg");

function aadhar(e){
    
    let num=aadharNumber.value;

    if(!num.match(/^\d[0-9]{12}$/)){
        e.preventDefault();
        msg.innerHTML = "Invalid Number";
        msg.style.color = "red";
        btn.disabled = true;
        return false;
}
else{
        msg.innerHTML = "valid Number";
        msg.style.color = "green";
        btn.disabled = false;
        return true;
    }
}
aadharNumber.addEventListener("input", aadhar);




