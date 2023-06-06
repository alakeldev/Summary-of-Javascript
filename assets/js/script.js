/*
Javascript In Two Lines:
"JS" is Scripting Language, it's working on client side (Browser) and server side too (BackEnd).
"JS" is to implement complex features on your webpage by making it interactive.
*/

/*
With JS you can do: 
- Dynamically Update Content
- Manipulating HTML and CSS
- Animate Images, Content and Creat Image Gallery
- Manipulate and Validate Data
- Control MultiMedia (Video, Audio,..)
- Web Browser Games
- Mobile Apps, PS Apps, Cross Apps (by using frameworks to make it working in all MAC, Windows, Linux)
*/

/*
The Main Sections In JS:
- Vanilla JS
- DOM 
- BOM 
- OOP
*/

//------------------------------------------------------------------------------------------------------------------------
/*
- window.alert("Write here your Message");    "to show alert Message to user,,,,,using alert property inside window object" 
- document.write("<h1>Hello <span>World</span></h1>");     "Creat new Element, Text,,,, inside the document object"

- console.log("Hello World")  "Print Message on console,,,,,inside console object we used log property"  
- console.error("Error");      "Print Error Message on console,,,,,inside console object we use error property"
- console.table(["Alakel", "Abode", "Ghost"])     "Print the array with its indexes in console as a table"
- console.log("%cHello %cWorld", "color: red; font-size: 40px", "color: blue; font-size: 20px")
"To add styling from the console: we are useing 'Directive (%c)' before the world or sentence that we want to add style on it".

- * Web API (console is related to Web API (Application Programming Interface) *
- * ES6 (check this website to check the difference between the ES new version and old versions // http://es6-features.org/#Constants)
*/
//-------------------------------------------------------------------------------------------------------------------------


/*/*//*/*//*/*//*

Data Types:

- String
- Number
- Array => Object
- Object
- Boolean
- Undefined
- null => Object

// Important Operator and Function : typeof()
console.log(typeof("Alakel Abdullah"))   OR   console.log(typeof "5000")  // string 
console.log(typeof(5000))   OR   console.log(typeof 5000.55)  // number
console.log(typeof([10, 15, 17]))   OR   console.log(typeof [10, 15, 17])  // array (=> Object)
console.log(typeof(["Abdullah", "Alakel", "SOSO"]))   OR   console.log(typeof ["Abdullah", "Alakel", "SOSO"])  // array (=> Object)
console.log(typeof({name: "Abdulah", age: 17, country: "Syr"}))   OR   console.log(typeof {name: "Abdulah", age: 17, country: "Syr"}) //object
console.log(typeof(true))   OR   console.log(typeof false) // boolean
console.log(typeof(undefined))   OR   console.log(typeof undefined) // undefined
console.log(typeof(null))   OR   console.log(typeof null) // object

*//*//*///*/*//*
//-------------------------------------------------------------------------------------------------------------------------

/*/*//*/*//*//*

Variables:
- Declare a Variable and how to use it (Syntax):
Keyword | Variable Name | Assignment Operator | Variable Value

Example:
var myName = "Alakel";
var myAge = 29;

PS: With Creating an element inside html page and set an Id property to it. It means you set a global variable and you can access it with js.

Example:
console.log(hello);  // it prints the element with id hello inside the console

hello.innterHTML = "World";  // change the content of html element with id hello (Global variable), and assign a new content to it.


*(Javascript is Loosely type language because when you are initiating new variable, there is no need to write the type of this variable)

*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------

/*/*//*/*//*//*
* Var:
- Redeclare (yes)
- Access before declare (Undefined you cannot know the issue (confusing))
- Variable Scope Drama (it will be Add to/inside  Window object!)

* Let:
- Redeclare (No => Error)
- Access before declare (Error)
- Variable Scope Drama (-)

*Const:
- Redeclare (No => Error)
- Access before declare (Error)
- Variable Scope Drama (-)

*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------

/*/*//*/*//*//*
- Escape Operator : \
Example:    console.log("Abdullah \"Alakel\"");  // Abdullah "Alakel"


- Escape + continue in new line
Example: console.log("Abdullah \
Alakel \
Developer");   // Abdullah Alakel Developer


- Start new Line :\n
Example: console.log("Abdullah\nAlakel\nDeveloper");  //    Abdullah
                                                            Alakel
                                                            Developer


*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------
/*/*//*/*//*//*
Concatenation:

Example: 1

let a = "Abdullah";
let b = "Alakel";
document.write(a + " " + b);  // print these variables on the webpage
console.log(a, b);   // print these variables on the console

Example: 2

let a = "We Love";
let b = "JavaScript":
let c = "And";
let d = "Python";

console.log("a + " " + b + " " + c + " " + d ");    // We Love JavaScript And Python
console.log("a + " " + b + "\n" + c + " " + d ");    // We Love JavaScript 
                                                        And Python
console.log(`${a} ${b} ${c} ${d}`);        // We Love JavaScript And Python
console.log(`${a} ${b}                     // We Love JavaScript
${c} ${d}`);                                  And Python

console.log(`${a} ${b} "" '' \\ ${c} ${d}`);        // We Love JavaScript "" '' \ And Python

Example: 3

let lname = "Alakel";
let fname = "Abdullah";

let myCard = `
<div class="container">
<div class="child">
<h2>${lname}</h2>
<p>${fname}</p>
</div>
</div>`;

document.write(myCard);    // Add/creat the value of myCard variable on the webpage

*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------

/*/*//*/*//*//*

Arithmetic Operators:

+ Addition
console.log(20 + 20);             // 40
console.log(20 + "Abdullah");    //10Abdullah

- Subtraction
console.log(30 - 20);            // 10
console.log(10 - "Abdullah");    // NaN (Not a Number)

console.log(typeof NaN);         // number!   :D

* Multiplication
console.log(10 * 30);            // 300
console.log(10 * -30);           // -300

/ Division
console.log(20 / 5);             // 4
console.log(20 / 3);             //6.66666666667

** Exponentiation
console.log(2 ** 4);             // 16

% Modulus
console.log(10 % 2);             // 0
console.log(11 % 2);             // 1

++ Inrement [post / pre]

let num = 1;
num++; (POST) it will print the value first then will increase it
++num; (PRE) it will increase first then will print it

-- Decrement [post / pre]
let num = 1;
num--; (POST)it will print the value first then will decrease it
--num; (PRE)it will decrease the value first then print it

*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------

/*/*//*/*//*//*

Unary Operator

+ Unary Plus
console.log(+100);      // Number
console.log(+"100");    // Number
console.log(+"-100");   // Number
console.log(+"Alakel");   // NaN
console.log(+"15.1");   // Number
console.log(+0xff);   // HexaDecimal => 255
console.log(+null);   // 0
console.log(+true);   // 1
console.log(+false);   //0


- Unary Negation
console.log(-100);      // Number
console.log(-"100");    // - Number
console.log(-"-100");   // +Number
console.log(-"Alakel");   // NaN
console.log(-"15.1");   // -Number
console.log(-0xff);   // HexaDecimal Numeral System => -255
console.log(-null);   // -0
console.log(-true);   // -1
console.log(-false);   //-0


- Number Constructor

Example: 
console.log(Number("100"));    // Number

*//*//*///*//*

/*/*//*/*//*//*
Type Coercion:

Example:
let a = "10";
let b = 20;
let c = true;

console.log(a + b + c);     // 1020true
console.log(+a + b + c);    // 31

*//*//*///*//*


/*/*//*/*//*//*

Assignment Operators:

let a = 10;  

console.log(a);   // 10

a = 20; 

console.log(a);    // 20

a = a + 20;  or a += 20;

console.log(a);   // 40

a -= 20;

console.log(a);   // 20

a /= 5;

console.log(a);   // 4

*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------
/*/*//*/*//*//*

/Number/

Double Precision (All numbers in JS)

- Syntactic Sugar "_"
Example: 
console.log(1_000_000);    // 1000000

- e
Example:
console.log(1e6);       // 1000000
console.log(1e3);       // 1000

- Number (Function) it's using Constructor to intiat a number in JS
console.log(typeof Number);    // function

console.log(Number.MAX_SAFE_INTEGER);     // 9007199254740991
console.log(Number.MAX_VALUE);            // 1.7976931348623157e+308


/Number Methods/
- toString()
- Two Dots To Call A Methods

console.log((100).toString());   // 100 as string
console.log(100..toString());    // 100 as string
console.log(100.10.toString());  // 100.1 as string

- toFixed()

console.log(100.5555555.toFixed(2));  // 100.56 as string
console.log(100.5545555.toFixed(2));  // 100.55 as string

- parseInt()

console.log(parseInt("100"));   //  100 as Number

Important Examples below:
console.log(Number("100 Alakel"));   // NaN
console.log(+"100 Alakel");    // NaN
console.log(parseInt("100 Alakel"))  // 100
console.log(parseInt("Alakel 100 Alakel"))  // NaN

- parseFloat()

console.log(parseInt(200.100 Alakel));    // 200
console.log(parseFloat(200.100 Alakel));  // 200.1

- isInteger()

console.log(Number.isInteger("100"));    // false
console.log(Number.isInteger(100.500));  // false
console.log(Number.isInteger(100));      // true


- isNaN()

console.log(Number.isNaN("alakel"));  // false
console.log(Number.isNaN("alakel" / 20));  // true

*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------
/*/*//*/*//*//*

Math Object

- console.log(Math.round(99.2));   // below .5 => 99
- console.log(Math.round(99.5));   // equal or more than .5 => 100

- console.log(Math.ceil(99.2));   // 100

- console.log(Math.floor(99.9));  // 99

- console.log(Math.min(5. 30, 100, -200, 95))   // -200
- console.log(Math.max(5. 30, 100, -200, 95))   // 100

- console.log(Math.pow(2, 4));    // 16
- console.log(Math.pow(2, 2));    // 4

- console.log(Math.random());     // between 0 and 1

- console.log(Math.trunc(99.5));   // 99 (will return only the integer part)

*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------
/*/*//*/*//*//*

String Methods

let myName = "abode";
let myList = [1, 2, 3, 4, 5]

- Access with Index:
console.log(myName[1]);    // b
console.log(myName[5]);    // undefined

- Access with charAt():
console.log(myName.charAt(0));   // a
console.log(myName.charAt(5));   // "empty"

- length
console.log(myName.length);   // 5

-trim()      /Removes the leading and trailing white space and line terminator characters from a string/
myName = "  abode  ";
console.log(myName.trim()); // abode   


- toUpperCase()
- toLowerCase()

console.log(myName.toUpperCase()); // ABODE
console.log(myName.toLowerCase()); // abode


- Chain Methods  /Important/
console.log(myName.trim().charAt(2).toUpperCase());  // abOde

//--------------------------------

- indexOf(Value [Mandatory], Start [Optional] 0)
- lastIndexOf(Value [Mandatory], Start [Optional] length)

Examples:
let a = "Abdullah Khaled Alakel";
console.log(a.indexOf("Khaled"));         // 9
console.log(a.indexOf("Khaled", 10));    // -1
console.log(a.lastIndexOf("a"));        // 18


- slice(Start [Mandatory], End [Optional] *The End not Include)

Examples:
let a = "Abdullah Khaled Alakel";
console.log(a.slice(0));         // Abdullah Khaled Alakel
console.log(a.slice(3));        // ullah Khaled Alakel
console.log(a.slice(9, 15));     // Khaled
console.log(a.slice(-1, -7 ))    // Alakel


- repeat(Times)
Example:
let a = "Abdullah Khaled Alakel";
console.log(a.repeat(3));   // Abdullah Khaled AlakelAbdullah Khaled AlakelAbdullah Khaled Alakel


- split(separator [Optional], Limit [Optional]);
Example:
let a = "Abdullah Alakel";
console.log(a.split());   // ["Abdullah Alakel"]  => Array
console.log(a.split(""));   // ["A","b","d","u","l","l","a","h"," ","A","l","a","k","e","l"]
console.log(a.split(" "));   //  ["Abdullah", "Alakel"]
console.log(a.split("", 3));   // ["A","b","d"]


//--------------------------------


- substring(Start [Mandatory], End [opt] Not Including End)
Example:
let a = "Abdullah Alakel";
console.log(a.substring(9));                         // Alakel
console.log(a.substring(9, 12));                   // Ala
console.log(a.substring(12, 9));                   // same result (Ala) because it makes swapping if the start bigger than end
console.log(a.substring(-10, 7));                   // Abdullah - any number less than 0, it makes the start from 0
console.log(a.substring(a.length - 1));                          // l
console.log(a.substring(a.length - 6, a.length - 3));           // Ala



- substr(Start INDEX [Mandatory], Number of characters to Extract)
Example:
let a = "Abdullah Alakel";
console.log(a.substr(0));     // Abdullah Alakel
console.log(a.substr(0, 6));     // Abdull
console.log(a.substr(16));     // "empty"
console.log(a.substr(-3));     // kel
console.log(a.substr(-6, 5));     // Alake



** ONLY Return True and False **
- includes(Value[Mandatory, Start position [Optional] default 0])
- startsWith(Value[Mandatory, Start position [Optional] default 0])
- endsWith(Value[Mandatory, Length [Optional] default Full length])

Examples:
let a = "Abdullah Alakel";
console.log(a.includes("Alakel")); // true

console.log(a.startsWith("A"));  // true
console.log(a.startsWith("A", 2));  // false
console.log(a.startsWith("d", 2));  // true

console.log(a.endsWith("a"));   // false becasue it ends with l not a (Abdullah Alakel)
console.log(a.endsWith("l"));   // true becasue it ends with l (Abdullah Alakel)
console.log(a.endsWith("a", 7));   // true becasue the length 6 ends with a (Abdulla) 
console.log(a.endsWith("la", 7));   // true becasue the length 6 ends with a (Abdulla)

*//*//*///*//*