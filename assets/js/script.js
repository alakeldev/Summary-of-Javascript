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
- Variable Scope Drama (it will be Add to/inside  Window object!) - Not respect its scope and make over write on global scope variables

* Let:
- Redeclare (No => Error)
- Access before declare (Error)
- Variable Scope Drama (-) - respect its scope and not make over write on global scope variables

*Const:
- Redeclare (No => Error)
- Access before declare (Error)
- Variable Scope Drama (-) - respect its scope and not make over write on global scope variables

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
It' Always return Array
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
console.log(a.endsWith("la", 7));   // true becasue the length 6 ends with la (Abdulla)

*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------
/*/*//*/*//*//*

Comparison Operators (Conditions)

    == Equal
    console.log(10 == "10");  // true  (it's compare value only)
    console.log(-100 == "-100");  // true  (it's compare value only)

    != Not Equal
    console.log(10 != "10");  // false  (it's compare value only)

    === Identical
    console.log(10 === "10");  // false  (it's compare value and type)

    !== Not Identical
    console.log(10 !== "10");  // true  (it's compare value and type)
    console.log(10 !== 10);  // false  (it's compare value and type)



    > Larger Than
    >= Larger Than or Equal
    console.log(10 > 20);  // false
    console.log(10 > 10);   // false
    console.log(10 >= 10);  // true

    < Smaller Than
    <= smaller than or Equal
    console.log(10 < 20);  // true
    console.log(10 < 10);   // false
    console.log(10 <= 10);  // true


    Tricky example:
    console.log("Abdullah" === "Alakel"); // false
    console.log(typeof "Abdullah" === typeof "Alakel");   // true

*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------
/*/*//*/*//*//*

Logical Operators

    ! Not
    console.log(true);           // true
    console.log(!true);          // false
    console.log(10 == "10");     // true
    console.log(!(10 == "10")); // false


    && And
    console.log(10 == "10" && 10 > 8); // true
    console.log(10 == "10" && 10 > 8 && 10 >= 10); // true
    console.log(10 == "10" && 10 > 8 && 5 >= 10); // false


    || Or
    console.log(10 == "10" || 10 > 8 || 10 > 50); // true
    console.log(10 == "10" || 10 > 80 || 10 > 50); // true
    console.log(10 == "100" || 10 > 80 || 10 > 50); // false

*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------
/*/*//*/*//*//*

Control Flow: (Conditions)

- if
Syntax:
if(Condition) {
    //Block Of Code
}

Example:

let price = 20;
let disc = true;
let discamount = 5;
let country = "Syria";

if(discamount === true) {
    price -= disc;   // 15
}

console.log(price);



- else if  // another condition if the first condition not proceed

Example:

disc = false;

if(discamount === true) {
    price -= disc;   // 15
} else if (country === "Syria") {
    price -= disc;
} else if (county === "Germany") {
    price -= 3;
}

console.log(price);


-else

Example:

if(discamount === true) {
    price -= disc;   // 15
} else if (country === "Syria") {
    price -= disc;
} else if (county === "Germany") {
    price -= 3;
} else {
    price -= 1;
}

*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------
/*/*//*/*//*//*

*****Nested If

Example:

let price = 20;
let disc = false;
let discamount = 5;
let country = "Syria";
let student = true;

if (disc === true) {
    price -= discamount;
} else if (county === "Syria") {
    if (student === true) {
        price -= discamount + 40;
    }else {
        price -= discamount + 10;
    }
}

*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------
/*/*//*/*//*//*
Conditional /Ternary/ Operator

Syntax:
Condition ? If True : If False

Example: (Normal if)
let theName = "Abdullah";
let theGender = "Male";
let theAge = 29;

if(theGender === "Male") {
    console.log("Mr");
} else {
    console.log("Mrs");
}


Example: (short if)

- theGender === "Male" ? console.log("Mr") : console.log("Mrs");   // Mr


- let result = theGender === "Male" ? "Mr" : "Mrs";
    console.log(result)  // Mr


- console.log(theGender === "Male" ? "Mr" : "Mrs"); // Mr


- console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);  // Hello Mr Abdullah




if - else if - else (short way)

Example:

theAge > 20 
? console.log(20) 
: theAge > 20 && theAge < 60 
? console.log("20 to 60") 
: theAge > 60 
? console.log("Larger Than 60") 
: console.log("unknow");

*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------
/*/*//*/*//*//*

Logical or || 

It's Important to make alternative value for the main value as many situations may the main value not shown!! 
so the alt value will be showing

Example:
let price = 0;

console.log(`The Price Is ${price || 200}`); ///// the 200 will be showing in three cases: (Null + Undefined + Any Falsy Value)

**How you can know the data if it's true of false:
console.log(Boolean(100)); // true
console.log(Boolean(-100)); // true
console.log(Boolean(0));    // false
console.log(Boolean(""));   // false
console.log(Boolean(null));  // false



Nullish Coalescing Operator:
It will return the alt value only with Null and undefined

price;
price = null;

console.log(`The Price Is ${price ?? 200}`);   // 200

price = 0
console.log(`The Price Is ${price ?? 200}`);   // 0


*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------
/*/*//*/*//*//*

Switch Statement
Syntax:
switch(expression){
    case 1:
        //code block
        break;
    case 2:
        //code block
        break;
    case 3:
        //code block
        break;
    default:
        //code block
}

Example:
let day = 2;  Identical operator (checking if it's the same type and same value to match with cases)

******if check all the cases and no matching to it will run the code inside the default 
switch (day) {
    case 0:
        console.log("Saturday");
        break;
    case 1:
        console.log("Sunday"):
        break;
    case 2:
    case 3:                    // if matching with case 2 or case 3 the code inside it will running
        console.log("Monday");
        break;
    default:
        console.log("Unknow Day!")
}

*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------
/*/*//*/*//*//*

Arrays

let myFriends = ["Abdullah", "Alakel", "Ahmad", ["Maya", "Sara"]];   // creat an array and nested Array
console.log(`Hello ${myFriends[0]}`);    // Hello Abdullah
console.log(`Hello ${myFriends[2]}`);    // Hello Ahmad
console.log(`${myFriends[1][1]}`);    // A
console.log(`Hello ${myFriends[3]`);    // Hello Maya, Sara
console.log(`Hello ${myFriends[3][1]]`);    // Hello Sara
console.log(`${myFriends[3][1][0]]`);    // S

myFriends[1] = "Sami";

console.log(myFriends); // ["Abdullah", "Sami", "Ahmad", ["Maya", "Sara"]]

myFriends[3] = "Layan";
console.log(myFriends);  // ["Abdullah", "Sami", "Ahmad", "Layan"]

myFriends[0] = ["SOSO", "FOFO"];
console.log(myFriends);  // [["SOSO", "FOFO"], "Sami", "Ahmad", "Layan"]


-------console.log(typeof(myFriends)); // Object
-------console.log(Array.isArray(myFriends));   // true  to check if it's array or not by using method (Array.isArray()) 

let str = "Abode";
-------console.log(Array.isArray(str));   // false   

*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------
/*/*//*/*//*//*

Array Methods
- Length:

let myFriends = ["Abdullah", "Alakel", "Ahmad", "Maya"];

console.log(myFriends.length);   // 4

myFriends[6] = "Lana";

console.log(myFriends.length); // 7   //after we set index number 6 = "Lana", it leave also two empty element inside the array
which are index number 4 and 5.

- If you want to add in dynamic way a new element to your array you can use as below:
myFriends[myFriends.length] = "Sana";      // so Sana it will add to the end of your array without adding empty elements inside your array

----if you want to update the last element in your array:
myFriends[myFriends.length - 1] = "Layla";

-----  myFriends.length = 2;  // here we say that the array contains only 2 elements.

//----------------------------------------------------

Arrays Methods [Adding and Removing]

- unShift("The elements that you want to add","The elements that you want to add", " ",) Add Elements to the First
Example:
let myFriends = ["Abdullah", "Alakel", "Ahmad", "Maya"];

console.log(myFriends);  // ["Abdullah", "Alakel", "Ahmad", "Maya"]

myFriends.unshift("Mona", "Sana"); 

console.log(myFriends); // ["Mona", "Sana","Abdullah", "Alakel", "Ahmad", "Maya"]

- push("The elements that you want to add","The elements that you want to add", " ",) add Elements to the End

myFriends.push("Saya", "Faya"); 

console.log(myFriends); // ["Mona", "Sana","Abdullah", "Alakel", "Ahmad", "Maya","Saya", "Faya"]

- shift()   Remove First Element from Array

let fname = myFriends.shift();

console.log(myFriends)  // ["Sana","Abdullah", "Alakel", "Ahmad", "Maya","Saya", "Faya"]

console.log(fname);  // Mona

- pop() Remove last Element from Array

let lname = myFriends.pop();

console.log(myFriends)  // ["Sana","Abdullah", "Alakel", "Ahmad", "Maya","Saya"]

console.log(lname);  // Faya

//----------------------------------------------------

Arrays Methods [Search]
    - indexOf(Search Element [Mandatory], from Index [optional])

Example: 
let myFriends = ["Abdullah", "Alakel", "Ahmad", "Ahmad", "Maya","Alaa"];

console.log(myFriends);

console.log(myFriends.indexOf("Ahmad")); // 2   the search will start from index 0 as default value 
console.log(myFriends.indexOf("Ahmad", 1)); // 2   the search will start from index 1 

    - lastIndexOf(Search Element [Mandatory], from Index [optional])         // the search will start from the end to begin
Example:
let myFriends = ["Abdullah", "Alakel", "Ahmad", "Ahmad", "Maya","Alaa"];
console.log(myFriends.lastIndexOf("Ahmad"));   // 3       the search will start from the end so he will took the second ahmad
console.log(myFriends.lastIndexOf("Ahmad", -4));  // 2      the search will start from the end so he will took the first ahmad because of
the search will start from index -4


    - includes(ValueToFind [Mandatory], from index [optional])
Example:
let myFriends = ["Abdullah", "Alakel", "Ahmad", "Ahmad", "Maya","Alaa"];

console.log(myFriends.includes("Ahmed"));  // true
console.log(myFriends.includes("Ahmed", 3));  // true

Important Example:
let myFriends = ["Abdullah", "Alakel", "Ahmad", "Ahmad", "Maya","Alaa"];
if (myFriends.indexOf("Ahmad") === -1) {
    console.log("Not Found");               // this code will not be excute because ahmad is inside the array
}else if (myFriends.indexOf("Samaya") === -1){
    console.log("Not Found");               // this code will excute because Samaya is not inside the arraay 
}

The result to understand:
console.log(myFriends.indexOf("Samaya"));     // -1   always if not found will return -1
console.log(myFriends.lastIndexOf("Samaya"));   // -1 always if not found will return -1

//----------------------------------------------------


Array Methods: ([Sort])

- Sort (Fucntion [optional])

Example:
let myFriends = [10, "Alakel", "Abdullah", "90", 1000, 100, 20, "10, -20, -10"];

console.log(myFriends); //   [10, "Alakel", "Abdullah", "90", 1000, 100, 20, "10, -20, -10"];
console.log(myFriends.srot());  // [-10, -20, 10, '10', 100, 1000, 20, '90', 'Abdullah', 'Alakel']

- Reverse 

Example:
let myFriends = [10, "Alakel", "Abdullah", "90", 1000, 100, 20, "10, -20, -10"];
console.log(myFriends); //   [10, "Alakel", "Abdullah", "90", 1000, 100, 20, "10, -20, -10"];
console.log(myFriends.reverse()); //  ['10, -20, -10', 20, 100, 1000, '90', 'Abdullah', 'Alakel', 10]


-- Note: you can use both in same time as below:
console.log(myFriends.sort().reverse());  // here it will make sort for the array then it will reverse it

//----------------------------------------------------

Arrays Methods [Slicing]

- slice(start [optional], end [optional] not including the end)
slice() =====> meaning all array
Example:

let myFriends = ["Abdullah", "Alakel", "Sana", "Ahmad", "Maya","Alaa"];
console.log(myFriends); // ["Abdullah", "Alakel", "Sana", "Ahmad", "Maya","Alaa"]

console.log(myFriends.slice());  // ["Abdullah", "Alakel", "Sana", "Ahmad", "Maya","Alaa"]
console.log(myFriends.slice(1));  // ["Alakel", "Sana", "Ahmad", "Maya","Alaa"]
console.log(myFriends.slice(1, 3));  // ["Alakel", "Sana"]
console.log(myFriends.slice(-3));  // ["Ahmad", "Maya","Alaa"]
console.log(myFriends.slice(1, -2));  // ["Alakel", "Sana", "Ahmad"]
console.log(myFriends.slice(-5, -2 ));  // ["Alakel", "Sana", "Ahmad"]

console.log(myFriends); // ["Abdullah", "Alakel", "Sana", "Ahmad", "Maya","Alaa"];

* all previouse slicing return a new array and you can store it in a avariable



- splice (start [Mandatory], deleteCount [optional] [0 No Remove], The Items to Add [Optional])
(Add and Remove, it's effecting on the original array not same as slice)
Example:

let myFriends = ["Abdullah", "Alakel", "Sana", "Ahmad", "Maya","Alaa"];

myFriends.splice(0, 0, "Faten", "MOMO");

console.log(myFriends);   // ["Faten", "MOMO","Abdullah", "Alakel", "Sana", "Ahmad", "Maya","Alaa"]

myFriends.splice(0, 1);
console.log(myFriends);   // ["MOMO","Abdullah", "Alakel", "Sana", "Ahmad", "Maya","Alaa"]

myFriends.splice(1, 2, "Layan"); 
console.log(myFriends);   // ["MOMO","Layan","Sana", "Ahmad", "Maya","Alaa"]


//----------------------------------------------------

Arrays Methods [Joining]
- Concat(array, array) => return a new array

let myUniFriends = ["Mazen", "Faten", "Wafaa", "Ahmad"];
let myNewFriends = ["Samar", "Layan", "Shady" ];
let mySchoolFriends = ["Rawan", "Sawsan", "George"];

let allFriends = myUniFriends.concat(myNewFriends, mySchoolFriends , "Jomana", ["Saya","Faya"]);

console.log(allFriends);  //["Mazen", "Faten", "Wafaa", "Ahmad","Samar", "Layan", "Shady", "Rawan", "Sawsan", "George","Jomana", "Saya","Faya"]


- join(Seprator)  return STRING default seprator in ,

related to previous Example:

console.log(allFriends.join());  //Mazen,Faten,Wafaa,Ahmad,Samar,Layan,Shady,Rawan,Sawsan,George,Jomana,Saya,Faya
console.log(allFriends.join(""));  //MazenFatenWafaaAhmadSamarLayanShadyRawanSawsanGeorgeJomanaSayaFaya
console.log(allFriends.join(" @ "));  //Mazen @ Faten @ Wafaa @ Ahmad @ Samar @ Layan @ Shady @ Rawan @ Sawsan @ George @ Jomana @ Saya @ Faya
console.log(allFriends.join("@").toUpperCase()); // //MAZEN@FATEN@WAFAA@AHMAD@SAMAR@LAYAN@SHADY@RAWAN@SAWSAN@GEORGE@JOMANA@SAYA@FAYA

*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------
/*/*//*/*//*//*

Loop
- For
Syntax:
for([1] [2] [3]) {
    //block of code
}  // [1] = Initialiazation , [2] = condition, [3] = the action after run the code inside block

Example: 1

for(let i = 0; i < 10; i++) {
    console.log(i);         // 0 , 1 ,2 ,3 , 4 , 5, 6 ,7 ,8 ,9 
}

Example: 2 

let myFriends = ["Mazen", "Faten", "Wafaa", "Ahmad", "Alakel"];

for(let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);  //  Mazen  Faten  Wafaa  Ahmad  Alakel
}

Example: 3 

let myFriends = [1, 2, "Mazen", "Faten",3, 4, "Wafaa", "Ahmad", "Alakel"];
let onlyNames = [];

for(let i = 0; i < myFriends.length; i++){
    if(typeof myFriends[i] === "string") {
        onlyNames.push(myFriends[i])
    }
}
console.log(onlyNames); // Mazen  Faten  Wafaa  Ahmad  Alakel

//----------------------------------------------------

Nested Loops:
Important to understand the example below to be clear the idea of nested loop.

Example:
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];#

let colors = ["Red", "Green", "Black"];

let models = [2022, 2023];

for(let i = 0; i < products.length; i++) {
    console.log("#".repeat(15)); // ######################
    console.log(`# ${products[i]}`); # product name
    console.log("#".repeat(15)); // ######################
    console.log("Colors: ");   // Colors: 
    for(let j = 0; j < colors.length; j++) {
        console.log(` - ${colors[j]}`);
    }
    for(let k = 0; k < models.length; k++) {
        console.log(`- ${models[k]}`);
    }

}

//----------------------------------------------------

Loop Control:
- break  (exit and break the loop)

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];
Ex:
for(let i = 0; i < products.length; i++) {
    if(products[i] === "Pen") {
        break;
    }

    console.log(products[i]);                           // Keyboard    
}                                                           Mouse

another Example: 

for(let i = 0; i < products.length; i++) {
    console.log(products[i]);                        // Keyboard                
                                                        Mouse
    if(products[i] === "Pen") {                         Pen
        break;
    }

}

--------------------------------------------

- Continue (get over of the value)
Ex:

let products = ["Keyboard", "Mouse", "Pen",20, 30, "Pad",40 , 5, "Monitor"];

let colors = ["Red", "Green", "Black"];

for(let i = 0; i < products.length; i++) {                          // Keyboard                             
    if(typeof products[i] === "number") {                               Mouse
        continue;                                                        Pen
    }                                                                    Pad
                                                                        Monitor
    console.log(products[i]);                           
}
--------------------------------------------

- Label (Identifire for your loop and you can control the break and continue through it) 
Example:

mainLoop: for(let i = 0; i < products.length; i++) {
    if(typeof products[i] === "number") {
        continue;
    }
    console.log(products[i]);
    nestedLoop: for(let j = 0; j < products.length; j++) {                  // Keyboard
        console.log(`- ${colors[j]}`);                                          - Red
        if(colors[i] === "Green") {                                             - Green
            break mainLoop;
        }
    }

*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------
/*/*//*/*//*//*
Loop
- While

Example:
Syntax:

while (condition) {

    // block of code

    #increasing (change the checking to not making infinit loop)
}
Example:1

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];

let index = 0;

while (index < 10) {

    console.log(index);       // 0 -------> 9

    index++;
}

Example: 2
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];

let index = 0;

while (index < 10) {
    
    console.log(index);     // 0 ---> 2
    index++;
    if(index === 3) {
        break;
    }
}

Example: 3
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];

let index = 0;

while(i < products.length) {
    console.log(products[index]);     //   Keyboard ------> Iphone
    index++;
}

--------------------------------------------


- Do / While

Small Example:

let i = 0;
do {
    console.log(i);     // 0
    i++
} while (false);

console.log(i);         // 1

*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------
/*/*//*/*//*//*

- Function:
What is Function: it's block of code to apply specific task follow DRY (Don't repeat your self).
there is two types:

-- build in functions: console.log(typeof console.log);  // function //,,,,,,,,,,there are many examples 
-- user defined function:

Syntax and basic usage of user defined function

function sayHello() {
    console.log(`Hello Alakel`)
}

sayHello();             // Hello Alakel

Example: 1

function sayHello(userName) {               // *function with Parameter
    console.log(`Hello ${userName}`);       // Hello Alakel
}

sayHello("Alakel");                         // *argument; the value of fucntion parameter or variable

Example: 2

function sayHello(userName, age) {
    console.log(`Hello ${userName} your Age is ${age}`);
    if(age < 20) {
        console.log(`Sorry The App is Not suitable for you!`);
    } else {
        console.log(`The App Is Suitable for you please Next `);
    }
}

sayHello("Alakel");   // Hello Alakel your Age is undefined
sayHello("Alakel", 29);   // Hello Alakel your Age is 29
                          // The App Is Suitable for you please Next
                        
sayHello("Abdullah", 15);   // Hello Abdullah your Age is 29
                            // Sorry The App is Not suitable for you!



Example: 3

function generateYears(start, end) {
    for(let i = start; i <= end; i++) {
        console.log(i);
    }
}

generateYears(1993, 2023);      // 1993 , 1994 ------> 2023


Example: 4

function generateYears(start, end, exclude) {
    for(let i = start; i <= end; i++) {
        if(i === exclude) {
            continue;
        }
        console.log(i);
    }
}

generateYears(1993, 2023, 2020);     // 1993, 1994 ------->2023   but without 2020 it's excluding as per the condition


--------------------------------------------

Function and return inside function

- sometimes we want from function to do not execution direct, sometimes we want from it to only return a value or result to store it and use it later.

- you cannot put anything after(below) the return because it's stopping the excution for the code inside the function and 
anything after it will not run.

- you can use return to make Interruptting to the function  (Example 3 below will explain)
Example: 1

function sayHello(userName) {
    return `Hello ${userName}`;
}

sayHello("Alakel");

console.log(sayHello("Alakel"));  // Hello Alakel

or let result = sayHello("Alakel");

console.log(result);        // Hello Alakel


Example: 2 

function calc(num1, num2) {
    return num1 + num2;

}

let result = calc(20, 25);

console.log(result);    // 45

console.log(result + 100);    // 145


Example: 3

function generateNumber(start, end) {
    for(let i = start; i <= end; i++) {
        console.log(i);
        if(i === 15) {
            return `exit the function, Interruptting`;
        }
    }
}

generateNumber(10, 20);      // 10 ------> 15  then will exit the function 'interrupted'


--------------------------------------------

Default function parameters:
- default value of the parameters is always undefined if is not set


function sayHello(username, age = "Unknown") {
    reutrn `Hello ${username} Your Age IS $ {age}`;
}

console.log(sayHello("Alakel", 29)); // Hello Alakel Your Age IS 29
console.log(sayHello("Alakel")); // Hello Alakel Your Age IS Unknown


another two logic ways to edit the default value of the fucntion parameters related to the previous Example:

1-   if(age === undefined) {
        age = "Unknown"
    }
2-    age = age || "Unknown";

--------------------------------------------

Rest Parameters:
if you don't know the exact number of the arguments that you want to add so you will not know the exact number of the function parameters
so you will use the Rest parameters:

- it's only one rest parameter allowed 
- it must be the last element or parameter

Example: 1

function calc(...numbers) {         // Array.isArray(numbers); ===> true  so it's array
    
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);                      // 10, 20, 50, 60 , 70
    }
}

calc(10, 20, 50, 60 , 70);

Example: 2

function calc(...numbers) {         // Array.isArray(numbers); ===> true  so it's array
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i]                      // result = result + numbers[i]
    }

    return `Final Result Is $ {result}`;

}

console.log(calc(10, 20, 50, 60 , 70));       // 210

--------------------------------------------

Anonymous Function: Function without name

let calculator = function (num1, num2) {
    return num1 + num2;
};

console.log(calculator(10, 10));     // 20

//////// use cases: we use it for example when we want make an action like when we press button to make specific action
so this action made specially for this click or task and i will not use it in another place so here you can use anonymous function here
another case to use anonymous function:
Example: 1

document.getElementById("button").onclick = function () {
    console.log("button action")
}

Example: 2

setTimeout(function () {
    console.log("Hello")
}, 2000);                   // after two seconds it will print in console Hello


Example: 3   Normal Function Example

function sayHello() {
    console.log("Hello Alakel");
}

document.getElementById("button").onclick = sayHello;  // on button click it will print on console    Hello Alakel




--------------------------------------------

Return Nested Function:
Function inside function

Example: 1

function sayMessage(fName, lName) {
    let message = `Hello`;

    // NESTED FUNCTION 
    function concatMsg() {
    
        message = `${message} ${lName} ${fName}`;
    }
    concatMsg();

    return message;
}

console.log(sayMessage("Abdullah", Alakel));   // Hello Abdullah Alakel

Example: 2

function sayMessage(fName, lName) {
    let message = `Hello`;
    
    // NESTED FUNCTION 
    function concatMsg() {
    
        return `${message} ${lName} ${fName}`;
    }

    return concatMsg;
}

console.log(sayMessage("Abdullah", Alakel));   // Hello Abdullah Alakel


Example: 3

function sayMessage(fName, lName) {
    let message = `Hello`;
    
    // NESTED FUNCTION 
    function concatMsg() {

        // NESTED in NESTED FUNCTION
        function getFullName() {
            return `${fName} ${lName}`
        }
    
        return `${message} ${getFullName()}`;
    }

    return concatMsg;
}

console.log(sayMessage("Abdullah", Alakel));   // Hello Abdullah Alakel

--------------------------------------------

Arrow Function:
it's alt for regular function but it has limitation with using so it's not good in all situations




Example:1 Regular fun

let print = function () {
    return 10;
}
console.log(print());     // 10




Example:1 arrow function related to the previous Example:

let print = () => 10;      // when you have only one statement
    OR
let print = () => {         // if you have more than one statement
    let a = 10;
    return 10;
}
    OR
let print = _ => 10;       // if you don't have any parameters

console.log(print());     // 10




Example:2 Regular fun

let print = function (num) {
    return num;
}



Example:2 arrow function related to the previous Example:

let print = num => num;       // if you has one parameter

console.log(print(100));    // 100

OR

let print = (num1, num2) => num1 + num2;  // if you have two parameters and more you must put () 

console.log(print(50,10))       // 60


*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------
/*/*//*/*//*//*

Higher Order Functions:
*It's a function that accepts fucntions as parameters and/ or returns a fucntion*

- Map:  

-- Method Creats a new array
-- Populated with the results of calling a provided function on every element
-- in the calling array 

Syntax:     arrayname.map(call back function(Element, Index, Array){ }, this argument)
Element => the current element being processed in the array.
Index => thei ndex of the current element being processed in the array.
Array => the current Array.

Note : Map Always return a NEW ARRAY

Example: Nomrla way

let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];
for(let i = 0; i < myNums.length; i++) {
    newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);     //2, 4 , 6, 8 , 10, 12


Example: Idea of previous example but with using Map

let addSelf = myNums.map(function (element, index, array){
1,   console.log(`Current Element => ${element}`);
2,    console.log(`Current Index => ${index}`);                   // the line 1,2,3 and 4 run it to understand the work way of map function
3,    console.log(`Array => ${array}`);
4,    console.log(`This => ${this}`);
    return element + element;        
}, 10)

console.log(addSelf);               // 2, 4, 6, 8, 10, 12


Example of Map fucntion but using the arrow type:

let addSelf = myNums.map((element) => element + element);

console.log(addSelf);            // 2, 4, 6, 8, 10, 12




Advanced Example: 1

let myNums = [1, 2, 3, 4, 5, 6];

function addition(ele) {
    return ele + ele;
}

let add = myNums.map(addition);

console.log(add);     // 2, 4, 6, 8, 10, 12



Advanced Examples: 

    /1/
let swappingCases = "aLAKEl";
let sw = swappingCases.split("").map(function (ele){
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
}).join("");

console.log(sw);     // AlakeL


    /2/
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let inv = invertedNumbers.map(function(ele){
    return -ele;
})

console.log(inv);     // -1, 10, 20, -15, -100, 30


    /3/  this Example need more focus to understand it

let ignoreNumbers = "Ala123ke4l";

let ign = ignoreNumbers.split("").map(function(ele){
    return isNaN(parseInt(ele)) ? ele : "";
}).join("")

console.log(ign);     //Alakel

----------------------------------------------------------------------------------------

- Filter:
-- Method Creats a new array
-- with all elements that pass the test implemented by the provided function.

Syntax:
filter(callBackFunction (Element, Index, Array) { }, this Argument)
- Element => the currene element being processed in the array.
- Index => the index of current element being processed in the array.
- Array => the current array.

Example: 1
in this example you check if the friends name is start with A (True of False) make test so if true it will take the value 
if not so it will drop it.

let friends = ["Faten", "Abdullah", "Abdulrahman", "Maya", "Amjad", "Lana"];

let filterFreinds = friends.filter(function(ele) {
    return el.startsWith("A");
})

console.log(filterFriends);    // ["Abdullah", "Abdulrahman", "Amjad"]


Example: 2
Get even numbers only 

let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter(function (ele) {
    return ele % 2 === 0 ? true : false;
});

console.log(evenNumbers);   // 20, 2, 10

----------------------------------------------------------------------------------------

- Reduce
-- Method Executes a reducer function on each element of the array-
-- resulting in a single output value.

Syntax:
reduce (CallbackFucntion(accumulator, current val, current index, source array) {}, initial value)
- accumulator => the accumulated value previously returned in the last invocation
- current val => the current element being processed in the array
- index => the index of the current element being processed in the array.
------------Starts from index 0 if an intialvalue is provided.
------------Otherwaisem it starts from index 1-
- array => the current Array


Example: 
let nums = [10, 20, 15, 30];

let add = nums.reduce(function (acc, current, index, arr) {
1,    console.log(`Acc => ${acc}`);
2,    console.log(`Current Element => ${current}`);
3,    console.log(`Current Element Index => ${index}`);                 // the lines from 1 to 6 is to understand the process only
4,    console.log(`Array => ${arr}`);                                    // run the example to understand it
5,    console.log(acc + current);
6,    console.log(`###############`);
    return acc + current;
}, );

console.log(add);    // 75


** Same previouse Example but we add initial value:

let nums = [10, 20, 15, 30];

let add = nums.reduce(function (acc, current, index, arr) {

}, 5);

console.log(add);    // 80

----------------------------------------------------------------------------------------

forEach:
*IT'S NOT MAKING NEW ARRAY
Method executes a provided function once for each array element.

user case : it's usually use when don't make any change on data of the array 


Syntax:
forEach(Call back function(Element, Index, Array) { }, this argument)
- Element => the current element being processed in the array.
- Index => the index of the current element being processed in the array.
- Array => the current array.

Note: it doesn't return anything [undefined], Also break will not break the loop

- it's very important higher order function and examples will be in real life scenarios.

*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------
/*/*//*/*//*//*

Object

What is Object:
properties and methods
properties: any type of data (return details)  // window.location.href   only return details 
methods: fucntions (actions, behaviour)         // window.location.assign("https://google.com")

Simple Example:

let user = {
    // properties
    theName: "Alakel",
    theAge: 29,
    // Methods
    sayHello: function() {
        return `Hello`;
    },
};

conosle.log(user.theName);      // Alakel
conosle.log(user.theAge);       // 29
conosle.log(user.sayHello());   // Hello


Another Example:

the advantage of using bracket notation

let user = {
    theName: "Abdullah",
    "my country": "Syria",
};
conosle.log(user.theName);      // Abdullah
conosle.log(user["theName"]);      // Abdullah
conosle.log(user["my country"]);      // Syria  it will not couse an error if you have space inside the property name


Another Example:
Dynamic property Name:
In the example below you will know the difference between Dot Notation and Bracket Notation

let myVar = "country";

let user = {
    theName: "Alakel",
    country: "Syria",
};

console.log(user.theName);    // Alakel
console.log(user.country);    // Syria
console.log(user.myVar);    // undefined
conosle.log(user[myVar]);    // Syria


----------------------------------------------------------------------------------------

Nested Object: very important example:

let user = {
    name: "Alakel",
    age: 29,
    skills: ["HTML", "CSS", "JS"],
    available: false
    addresses: {                        // Addresses is nested object inside the user object
        uae: "Dubai",
        syria: {                        // syria is nested object inside addresses object
            one: "Damascus",
            two: "Lattakia",
        },
    },
    checkAv: fucntion() {                // Method
        if (user.available === true) {                  * important to write user.available not only available 
            retrun  `Free for Work`;                     because if you write only avilable it will search on this 
        } else {                                         variable on global scope and it not find it so it will return an error said
            return `Not Free for Work`;                  available isnot defined *
        }
    },                                   
}


console.log(user.name);        // Alakel
console.log(user.age);        // 29
console.log(user.skills.join(" | "));        // HTML | CSS | JS
console.log(user.skills[2]);        // JS      access with index
console.log(user.addresses.uae);        //   Dubai
console.log(user.addresses.syria);        // {one: "Damascus", two: Lattakia} 
console.log(user.addresses.syria.one);        // Damscus    Dot notation way
console.log(user["addresses"].syria.one);        // Damscus    mix between dot notation and bracket notation
console.log(user["addresses"]["syria"]["one"]);        // Damscus       bracket notation way


console.log(user.checkaV())                 // Not Free for Work


----------------------------------------------------------------------------------------

Create with New keyword new Object:

Normal way without using New kewWord:

let user = {
    age: 10,
};              // object

console.log(user);        // {age: 10}  

user.age = 29;              // update on property value
user["country"] = "Syria";

console.log(user);          // {age: 29 , country: "Syria"}

user.sayHello = function () {
    return `Hello`;
}

conosle.log(user);          // {age: 29 , country: "Syria", sayHello: f}
conosle.log(user.age);      // 29    
conosle.log(user.country);      // Syria
conosle.log(user.sayHello());   // Hello



Same previouse Example but with using New Keyword:

let user = new object({                              // creat object using object constructor
    age:10,
});           

console.log(user);        // {age: 10}  

user.age = 29;              // update on property value
user["country"] = "Syria";

console.log(user);          // {age: 29 , country: "Syria"}

user.sayHello = function () {
    return `Hello`;
}

conosle.log(user);          // {age: 29 , country: "Syria", sayHello: f}
conosle.log(user.age);      // 29    
conosle.log(user.country);      // Syria
conosle.log(user.sayHello());   // Hello

----------------------------------------------------------------------------------------

Function THIS keyword:

console.log(this);      // windows object
console.log(this === window);     // true

myVar = 100;

console.log(window.myVar);        // 100
console.log(this.myVar);        // 100

function sayHello() {
    console.log(this);     // this is window object
    return this;
}

sayHello();     // window
console.log(sayHello() === window) ;     // true



Example: 1

document.getElementById("btn1").onclick = function() {
    console.log(this);                      // this is to btn (owner of the function) it will return button with id "btn1"
};

Example: 2

let user = {
    age: 29,
    agInDays: function() {
        console.log(this);            // {age:29, ageInDays: f}      / user Object just for clarify
        return this.age * 365;      // this is to user object / this === user
    },
};

console.log(user.age);    // 29
console.log(user.ageInDays());  // 10585


----------------------------------------------------------------------------------------

Strict Mode
it's important to read about this mode becuase it will reduce the errors that you gonna face, please open below link

https://www.geeksforgeeks.org/strict-mode-javascript/

also you can read about it on w3school website too

----------------------------------------------------------------------------------------


Example: Object part/section


let user = {
    age: 29,
    doubleAge: function() {
        return user.age * 2;    
    },
};

console.log(user);          // {age:29, doubleAge: f}
console.log(user.age);          //  29
console.log(user.doubleAge());  //  58

--
let obj = Object.create({});           // inside create method take an object to use as prototype and it's accept empty object too
console.log(obj);    // {}

obj.a = 100;
console.log(obj);   // {a: 100}

--
let copyObj = Object.create(user);

console.log(copyObj);              // {} => proto type age:29 , doubleAge: f() // if you change in original object it will change the values
console.log(copyObj.age);          // 29
console.log(copyObj.doubleAge());  // 58


copyObj.age = 30;
console.log(copyObj);             // {age: 30} => proto type age: 29, doubleAge: f()
console.log(copyObj.age);          // 30
console.log(copyObj.doubleAge());   // 58


* here the problem here that if we change the value of the age inside the copyObj to 30 it will not return doubleAge function 60 value 
the reason of that because when we call the function inside the function doubleAge its type user.age and it's search on age
inside the scope of user object not inside the copyObj scope so here it made problem
so the sloution here to avoid these issues we are using this becuase this is related to an object that we are in *

again the previouse Emaples with Solitoion to this issue

let user = {
    age: 29,
    doubleAge: function() {
        return this.age * 2;    
    },
};


let copyObj = Object.create(user);

copyObj.age = 30;
console.log(copyObj);             // {age: 30} => proto type age: 29, doubleAge: f()
console.log(copyObj.age);          // 30
console.log(copyObj.doubleAge());   // 60    // now the age will bring from the object that i'm in because of this inside the original obj

----------------------------------------------------------------------------------------

Creat Object with Assign method:

let obj1 = {
    prop1: 1,
    meth1: function () {
        return this.prop1;
    },
};

let obj2 = {
    prop2: 2;
    meth2: function () {
        return this.prop2;
    },
};

let targetObject = {
    prop1: 100,
    prop3: 3,
};


let finalObject = object.assign(targetObject, obj1);               // target object to copy to , source object one or more 
                                                                //   that take these copies to target object

console.log(finalObject);   // meth1: f ()
                                prop1: 1        // if two property same name as example prope1 the value takes from the first property 
                                prop3: 3            // with this name so the value of prop1: 1 


let finalObject = object.assign(targetObject, obj1, obj2);

console.log(finalObject);               //  meth1: f()
                                            meth2: f()
                                            prop1: 1
                                            prop2: 2
                                            prop3: 3

finalObject.prop1 = 200;
                                          //meth1: f()
                                            meth2: f()
                                            prop1: 200
                                            prop2: 2
                                            prop3: 3
finalObject.prop4 = 400;
                                          //meth1: f()
                                            meth2: f()
                                            prop1: 200
                                            prop2: 2
                                            prop3: 3
                                            prop4: 400

-----------

Another Example 
if the target object is a new object (empty):

            --target Object-- --source obj-- --properties to add on the empty object--
let newObject = Object.assing({}, obj1, {prop5: 5, prop6: 6});

console.log(newObject);    // meth1: f ()
                            prop1: 1
                            prop5: 5
                            prop6: 6


-------------------------------------------------------------------------------------------------------------------------
Checking Whether a Key Exists
You can check whether a certain key exists in an object with the hasOwnProperty method.

const obj = { greeting: 'hello world' };

obj.hasOwnProperty('greeting');
// => true

obj.hasOwnProperty('age');
// => false


--------------------------------------------------------------------------------------------------------------------------

Deleting an Entry
You can delete a key-value pair from an object using the delete keyword.

const obj = {
  key1: 'value1',
  key2: 'value2',
};

delete obj.key1;
delete obj['key2'];
-----------------------------------------------------------------------------------------------------------------------
Looping Through an Object
There is a special for...in loop to iterate over all keys of an object.

const obj = {
  name: 'Ali',
  age: 65,
};

for (let key in obj) {
  console.log(key, obj[key]);
}
// name Ali
// age 65

------------------------------------------------------------------------------------------------------------------------

Nullish Coalescing
There are situations where you want to apply a default value in case a variable is null or undefined (but only then). 
To address this, the nullish coalescing operator ?? was introduced in 2020. 
It returns the right-hand side operand only when the left-hand side operand is null or undefined. 
Otherwise, the left-hand side operand is returned.

let amount = null;
amount = amount ?? 1;
// => 1

amount = 0;
amount = amount ?? 1;
// => 0

--------------------------------------------------------------------------------------------------


*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------
/*/*//*/*//*//*

DOM: Document Object Model
DOM Selectors:

- Find Element By ID:
let myIDElement = document.getElementById("my-button1");   // one element

- Find Element By Tag Name:
let myTagElement = document.getElementsByTagName("p");      // array you access to array by index
console.log(myTagElement[1]);   // get the element with index 1 inside the array

- Find Element By Class Name:
let myClassElement = document.getElementsByClassName("my-span");     // array you can acces to array by index
console.log(myClassElement[2]);    // get the element with index 2 inside the array


- Find Element By CSS Selectors:
NOTE: it's only bring one element and it's the first element that she got it and leave the first

let myQueryElement = document.querySelector(".special");       // it's from the CSS/ get the element with class speical
let myQueryElement = document.querySelector("#my-button1");       // it's from the CSS/ get the element with ID my-button1


NOTE: to get all elements (Not Only One Element) from Selectors:

let myQueryAllElements = document.querySelectorAll(".my-span");   // here you will got a list of you items that and you can access from index

console.log(myQueryAllElements[1]);


--------------

console.log(document.title);    // get main page title
console.log(document.body);    // get main page body and you can make append child on it
console.log(document.forms);        // you get forms collection if you have more than one form in your page
console.log(document.forms[0].one);  // you get specific form and specific element inside this form         
console.log(document.forms[0].one.value);  // you get specific form and specific element inside this form and get its value
console.log(document.links);            // you get collection
console.log(document.links[1].href);            // you get link with index 1 and its value of href attribute


--------------


DOM [Get, Set Elements content and attributes]:

let myElement = document.querySelector(".js");

console.log(myElement.innerHTML);     // return HTML elements and also the text if exist and it return the       &lt; &gr;
console.log(myElement.textContent);     // return only text content as text and it return thses too      < >

myElement.innerHTML = "Text from <span>Main.js</span> File";   // over write and it's add text and html elements too
                                                                                Text from Main.js File

myElement.textContent = "Text from <span>Main.js</span> File"; // return as text / Text from <span>Main.js</span> File /

--
bring images inside the page and each page using índex,
document.images[0].src = "https://google.com";
document.images[0].alt = "alternative";                         // if the attributes already exist it will make over write on it
document.images[0].title = "Picture";                                  // if it's not exist so it will add it
document.images[0].id = "pic";                                  
document.images[0].className = "image";                                  


--

let myLink = document.querySelector(".link");

myLink.getAttribute("class");        // it's bring the value of the class attribute
myLink.getAttribute("href");       // it'S bring the value of the href attribute


myLink.setAttribute("href", "https://twitter.com");   // in set you need two things (attribute name, its new value);
myLink.setAttribute("title", "Twitter");      // if the attribute not exist so it will initiate and set it

--------------

DOM [Check Attributes]
    - Element.attributes      // make a list of all attributes of specific element
Ex:
document.getElementByTagName("p")[0].attributes);  // list of all exist attributes

    - Element.hasAttribute  // check for a specific attribute if it's exist or not   (true, false)
Ex:                                                     it'S important to take a decision
let myP = document.getElementByTagName("p")[0];

if(myP.hasAttribute("data-src")) {
    console.log("found");
}else {
    console.log("not found");
}

    - Element.removeAttribute       // it's using for remove a spesific attribute from element 
Ex:                                 // by using set you can leave it empty only but remove it will remove it so it's not same action
et myP = document.getElementByTagName("p")[0];

if(myP.hasAttribute("data-src")) {
    if(myP.getAttribute("data-src") === "") {
        myP.removeAttribute("data-src")
    } else {
        myP.setAttribute("data-src", "New-Value") 
    }
}else {
    console.log("not found");
}


    - Element.hasAttributes        // it tells that if the element has attributes or not     true or false only 
Ex: 
    if(myP.hasAttributes()) {               // it's only checking if myP element has attributes or not return true or false
        console.log(`HAS ATTRIBUTES`);
} else {
    console.log(`HAS NOT ATTRIBUTES`);
}


--------------

DOM [Creat Elements]


- creatElement          // create new element
- creatAttribute        // create new my attribute and use later and you can use setAtrribute too


let myElement = document.creatElement("div");                   // (1)   Creat Element <div> </div>
let myText = document.creatTextNode("Product One")          // (2) Here we creat new text content and set it to the variable
                                                                            "Product One"

let myAttr = document.creatAttribute("data-custom")                //   -1
myElement.setAttributeNode(myAttr);                               //    -2     it appears on element attributes without value

myElement.setAttribute("data-test", "test");                      //  -1      it appears data-test attribute with its value test


myElement.className = "product";                                  // -1       add attribute but it's build in attribute not mine

// Append text to Element

myElement.appendChild(myText);                              // (3) <div> Product One </div>

// Append element to Body

document.body.appendChild(myElement);                       // (4) now append my element with all attributes and text inside body page



- You can Write Comment and add it to the body in html page:

let myComment = document.creatComent("This is Div");

// Append comment to element

myElement.appendChild(myComment);

//-------------------------------------------------------------------------------------------------------------------------

DOM [Deal With Childrens]

Examples:

-- children

let myElement = document.querySelector("div");    // select one div inside my html page

myElement.children;     // return all elements (Children) inside the parent div

myElement.children[0];   // you can access each element inside the parent through using index

-- childNodes

myElement.childNodes;   // return all nodes inside the div parent (element,textm,comment, also the space between tag as text)

myElement.childNodes[0];   // access nodes by index as example the node index 0

-- firstChild
-- lastChild
myElement.firstChild;    // return first child what ever the type (text,comment,element,)
myElement.lastChild;    // return last child what ever the type (text,comment,element,)

-- firstElementChild
-- lastElementChild
myElement.firstElementChild;  // return first element child (only the element)
myElement.lastElementChild;  // return last element child (only the element)

--------------

DOM [Events] veryImportantSection 

Events are all actions inside page example: onload, onclick,,,,,,,

-- Use Events on HTML: 

<button onclick="console.log("clicked")">Button</button>   // when press on button it will show on console clicked

-- use Events On JS

-onclick

let myButton = document.getElementById("btn");

myButton.onclick = function () {                    // event onclick ,,,,use anonymus function
    console.log("clicked")                          // when press on button it will show on console clicked
};

-oncontextmenu            // mouse right click

myButton.oncontextmenu  = function () {                    // event on right click ,,,,use anonymus function
    console.log("clicked")                          // when press right button on it will show on console clicked

-onmouseenter            // when the cursor(mouse) enter on it

myButton.onmouseenter  = function () {                    // event when your cursor or mouse enter the button ,,,,use anonymus function
    console.log("clicked")                          // when cursor enter button area so it will show on console clicked

-onmouseleave       // when the cursor(mouse) enter the area start when leave the cursor
myButton.onmouseleave  = function () {                    // event when your cursor or mouse leave the button area ,,,,use anonymus function
    console.log("clicked")                          // when cursor leave button area so it will show on console clicked


--onscroll        // when you make scroll on your webpage
window.onscroll = function() {                      
    console.log("scrolling");                       // when you make scroll page so it will show on console scrolling
};

--onresize    // when you make resize for the webpage


Events For Form:
--onfocus
--onblur
--onsubmit

--------------

DOM [Events Simulation]

very Important section (simulated Events) 
-- click
-- focus
-- blur

let inputTwo = document.querySelector(".input-two");
let inputOne = document.querySelector(".input-one");

window.onload = function () {            // when the page load it will auo focus on input two field
    inputTwo.focus();
};


inputOne.onblur = function () {             // when i go out (mouse cursor) out of the field make action(start function)
    document.links[0].click();              // when i go out from the field one it will open the link on the page with index 0
}


//-------------------------------------------------------------------------------------------------------------------------


DOM [Class List]
-classList          // through this you can add new class on the elements classes or delete it or search on class inside its classes

let element = document.getElementById("my-div");
                                                     //all class names inside class attribute and it will show each class name 
console.log(element.classList);                              with index,,, and its length too,,,,,,all methods class list object
console.log(typeof element.classList);              // object

--length
--contains                      // contains needs class name and check if it's there or not so it's return true or false
console.log(element.classList.contains("div-class1"));   // check if div-class is from classList of this item so if it'S there
                                                                it will return true if it's not false

--item(index)                   // item needs index of the class name
console.log(element.classList.item("0"));    // it will return class name with index 0 so it will return the class name

--add   // add classes names
Example:

element.onclick = function () {
    element.classList.add("class-one", "class-two");  // it will add these two classes on my element 
};

--remove    // remove classes names
    element.classList.remove("class-one", "class-two", "class-three") // it will remove the classes on my element;

--toggle  // it needs only one token   (make add and remove) if it's there it will remove it and if it's not it will add it
element.classList.toggle("class-four");  // if class-four there it will remove it, if not it will add it

//-------------------------------------------------------------------------------------------------------------------------

DOM [CSS]  

-- style            inline style
Ex:
let element = document.getElementById("my-div");

element.style.color = "red";
element.style.backgroundColor = "gray";
element.style.fontWeight = "bold";

-- cssText      it will make over write (group of properties inline style too)

element.style.cssText = "font-weight: bold; color: green; opacity: 0.9";


-- setProperty     (to set specific property)
syntax: setProperty(propertyName, Value, Priority)

-inline style
ex:
element.style.setProperty("font-size", "40px", "important");   


-CSS file style

document.styleSheets[0].rules[0].style.removeProperty("background-color", "red"); //inside css file


-- removeProperty   (to remove specific property)
Syntax: removeProperty(propertyName)  [Inline, styleSheet]

-inline style:
ex:
element.style.removeProperty("color");   



-inside CSS file style:

document.styleSheets[0].rules[0].style.removeProperty("line-height");           //inside css file



//-------------------------------------------------------------------------------------------------------------------------

DOM [Dear With Elements]


before [Element || String]
after [Element || String]

Ex:

let element = document.getElementById("my-div");
let createdP = document.createElement("p");


- element.before("Hello From JS");         // it will add this text before the element my-div (before the element not inside it) 
- element.before(createdP);         // it will add element createdP before the element my-div (before the element not inside it) 
- element.after("Hello From JS");         // it will add this text after the element my-div (after the element not inside it) 
- element.after(createdP);         // it will add element createdP after the element my-div (before the element not inside it) 


append [Element || String]
prepend [Element || String]

Ex:

- element.append(createdP);   // it will add element createdP inside the element my-div but in the last element inside it (last one)
- element.append("Hello from JS");   // it will add the text inside the element my-div but in the last inside it (last one)


- element.prepend("Hello from JS");    // it will add the text inside the element my-div but in the first inside it (first one)
- element.prepend(createdP);    // it will add element createdP inside the element my-div but in the first inside it (first one)


remove      // it will remove the element from DOM3 at all not only hide it

element.remove();      // it will remove completely the element my-div from the page


//-------------------------------------------------------------------------------------------------------------------------

DOM [Traversing]


let span = document.querySelector(".two");

- nextSibling:
- nextElementSibling:

span.nextSibling;   // the next sibling whatever be (comment, space, text, element,,,,,)  
span.nextElementSibling;   // the next element Sibling and it will ignore anything not element like (comment,text,space,,,,) 

- previousSibling:
- previousElementSibling:

span.previousSibling;   // the previous sibling whatever be (comment, space, text, element,,,,,)  
span.previousElementSibling;   // the previous element Sibling and it will ignore anything not element like (comment,text,space,,,,) 

- parentElement:        // it will bring the parent element for the targeted element

span.parentElement;     // it will return the parent element of span

//-------------------------------------------------------------------------------------------------------------------------

DOM [Cloning]

- cloneNode(Deep)   // it will take a copy from element with its all attributes    // Deep= boolean value (true of false /
false === take all attributes but it will not take the element inside the targeted element) and please be note this is a copy
and it's not effect the original element.


let myP = document.querySelector("p").cloneNode(true);
let myDiv = document.querySelector("div");

myP.id = `${myP.id}-clone1`;

myDiv.appendChild(myP);

//-------------------------------------------------------------------------------------------------------------------------


DOM [Add Event Listener] // we want to add more than one event on one element


/
Here problem we gonna face with normal events:
let myP = document.querySelector("p");

myP.onclick = one;
myP.onclick = two;

function one() {
    console.log("Message from onclick 1");
};
function two() {
    console.log("Message from onclick 2");
};

// here we gonna see that the function two will over write on function one and it wil show on console only message (Message from onclick 2)
/



examples events lisetener:

myP.addEventListener("click", function() {
    console.log("Message from onclick 1 Event Listener");
});


below the previouse issue but with event listener it will not cause over write and one of two will not work, so below both will 
work and show messages on console.

function one() {
    console.log("Message from onclick 1");          // normal function
};
function two() {
    console.log("Message from onclick 2");
};

myP.addEventListener("click", one);                 // event listener and use normal function in it
myP.addEventListener("click", two);                 // event listener and use normal function in it

myP.addEventListener("click", "String Hello");    // here you gonna see error because it accept only (object or JS fucntion)


-- Important point with eventListener
I have Paragraph when i click on this Paragraph so it will make a copy from this paragraph below it:

/ here we have an error because the cloned is not already on the page and created so it's an error
let myP = document.quesrySelector("p");

myP.onclick = function () {
    let newP = myP.cloneNode(true);
    newP.className = "clone";
    document.body.appendChild(newP);
}

**let cloned = document.quesrySelector(".clone");

cloned.onclick = fucntion () {                      // the code between the ** ** it's the error 
    console.log("Iam Cloned");
}**

/

HERE WE CAN USE EVENT LISTENER ON ELEMENT IS NOT YET ON MY PAGE OR IS NOT CREATED YET

document.addEventListener("click", function(e) {
    if(e.target.className === "clone"){        // here e.target is the element that I clicked on it (what ever the element that i clicked)
        console.log("Iam Cloned");                  e.target.className the element that i clicked if it has a class name clone so
    }                                                               run the block code inside if condition

})

*//*//*///*//*
//-------------------------------------------------------------------------------------------------------------------------
/*/*//*/*//*//*

Advanced JS concepts: review old info with give a new ones too,,,,important for framworks and advanced js ES6

Popular JS Framworks
*Angular.JS
*React.JS

-Heigh level review Prerequisites:
Functions:
function add(a,b) {
	let sum = a + b;
	return sum;
}

let result = add(1,2);

-Arrow Functions  ES6 (less verbose)
const addTwoNumbers = (a,b) => a + b;

-The Spread Operator:
	this keyword:
	you must understand this:
	- Inside and outside a function
	- Inside a JS Object

-Destructuring:
	Arrays and Objects
	Navigation and Manupulation
	map(), filter(), reduce()

-Ternary Conditionals:

Boolean Experssion ? True Part : False Part


ES6: Modern, less verbose form of JS.

1- var, let and const:

var => Global Scope
let and const => Block Scope


2- Template Literals:
Example:
`Hello, ${props.name}!`;

3- Arrow Functions:

4- Spread Operator & ...rest:
{...} spread

Example:
let numbers = [1, 2, 3, 4, 5];
let [a, b, ...rest] = numbers;

console.log(a);  //1
console.log(b);   //2
console.log(rest); // [3, 4, 5]

Note: ES6 is transpiled (converted) to Vanilla JavaScript when the application runs

- If you write on the terminal node file name to run the js file on terminal without need to create a web page

Example to review:
let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
    let sum = 0;
    let counter = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].results[subject]) {
            sum += arr[i].results[subject];
            counter++;
        }
    }
    
    return sum / counter;
};

let averageMarks = averagePoints(students, "english");
console.log(averageMarks);


-------------------------------------
Spread Operator: example
let arr3 = [4, 5, 6]:
let arr4 = [...arr3];

rest Parameter Syntax:
const sumRest = (a, b, c, ...rest) => {
	let sum = a + b + c;
	for(let i of rest) {
sum += i;
  }
return sum;
}



Example: of spread operator

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 87, art: 95},
    }
];

let subjects = [...students[0].subjects];

const update = (item, val) => [...item, val];

let updatedSubjects = update(subjects, 'Electronics');

console.log(updatedSubjects);

console.log(students[0]);



Example: rest Parameter Syntax

let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l' ];

console.log(moreMixedLetters);

const updateSortReverse = (arr, ...letters) => {
    let combinedArray = [...arr, ...letters];
    return combinedArray.sort().reverse();
}

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');
console.log(reverseSort);
console.log(mixedLetters);




Example for destructuring:
let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const makeList = (arr, student) => {
  let studentObj = arr.find(obj => obj.name === student);
  return studentObj.subjects;
};

let [first, second, ...rest] = makeList(students, 'John');
console.log(first);
console.log(second);
console.log(rest);
-------------------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5];
const found = numbers.find(element => element > 3);
console.log(found); // Output: 4
In this example, the find() method is used to find the first element in the numbers array that is greater than 3. The method returns 4, which is the first element that satisfies this condition.

--------------------------------------------------------------------------------------

map();
filter();
reduce();

all three of these methods are array methods that means which means they operate on an array of elements, the array can be strings, numbers, objects containing properties and values or even other arrays but it must be an array in order to work on it.

map, filter and reduce are all designed to be able to accomplished the same things that can be accomplished with a for loop or while loop using less code.

they are iterator methods which basics means that they provide a nice elegent way to iterate through and array of items and profrom some action on each item.



map(): First we have map(). The map method is called  on an array, and takes a single parameter,  
a callback function, which is a function you  want to execute on every element in the array.  
The map() method then iterates over the array,  calls this callback function on every element,  
and returns a new array containing  all the results of that process. 
A simple example usage of the map method, which  we’ll look at in more detail in the next video,  
would be to take an array of numbers and multiply  each number by two. The function to “map”  
to each array element, that is, the one being  called on each element, would multiply it by two,  
and the result of the whole process would  be an array of all the results. 
I’ll show you this example in detail in the next video. For now, just remember that the map method executes a  
provided callback function on each array item and  returns a new array containing all the results.


filter(): iterates over an array of items, and filters the  array to only a specified set of results. 
If you had an array of numbers, you could use filter()  to filter the array down to only the even numbers.  
If you had an array of names, you could filter  it to only those names that begin with a certain letter.
Basically, the filter method is for  filtering an array. Like the map method,  
it does this by taking a callback function as a  parameter. Each item in the array will be passed  
into the callback function, and if the callback  function returns true when given that element,  
that element will be included in the results.  Otherwise, the element will be filtered out.  
When the filter method is complete, the result  is a new array containing the filtered results.


reduce(): This is a more complex method, but its purpose  is simple: it reduces all the elements of an array 
into a single output value, according to a  callback function you provide. The simplest usage  
of this method might be if you wanted to reduce an  array of numbers to their total sum. In this case,  
you would call the reduce() method on the array  of numbers, and the callback function you pass  
as its parameter would serve the purpose of adding  each number to the last and keeping track of the total.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*//*//*///*//*

// Promises

const myPormise = new Promise((resolvedFunction, rejectFunction) => {
	let connect = true;
	if(connect) {
		resolvedFunction("Connection Established");
	} else {
		rejectFunction("Connection Failed");
	}
}).then(
	(resolveValue) => console.log(`Good ${resolveValue}`),
	(rejectValue) => console.log(`Bad ${rejectValue}`)
	
);

console.log(myPromise); // pending state here while it print first before the previous code start run

// Promise, then, catch, finally   (Here need to focus and use it always with promises)
/*
Important to understand the three status below to good deal with Promises
Then => Promise is successful use the resolved data
catch => Promise is failed, catch the error
Finally => Promise successfull or failed finally do something
*/


/*
Example in real life:
We will go to the meeting, promise me that we will find the 4 employees
.then(we will choose two people)
.then(we will test them to get one of them)
.catch(No one came)

*/

const myPromise = new Promise((resolveFunction, rejectFunction) => {
	let employees = ["Alakel", "Abode", "Abdullah", "Akole"]
	if(employees,length == 4) {
		resolveFunction(employees)
	} else {
		rejectFunction(Error("The Number of Employees are not 4"))
	}
});


myPromise.then(
	(resolveValue) => {
		resolveValue.length = 2;
		return resolveValue;
	});

myPromise.then(
	(resolveValue) => {
		resolveValue.length = 1;
		return resolveValue;
	});

myPromise.then(
	(resolveValue) => {
		resolveValue.length = 1;
		console.log(`The choosen Employee is ${resolveValue}`)
	});


/* بالمثال اللي قبل اذا شفت ال
then
مالن تشاين يعني مالن متصلين مشان هيك كل وحدة فين بترجع اييرور بالكونسول كل وحدة فين يعني بينطلع 3 مررات اذا كان الشرط ما تحقق و راح عالايلس

*/


myPromise.then(
	(resolveValue) => {
		resolveValue.length = 2;
		return resolveValue;
	}).then(
	(resolveValue) => {
		resolveValue.length = 1;
		return resolveValue;
	}).then(
	(resolveValue) => {
		resolveValue.length = 1;
		console.log(`The choosen Employee is ${resolveValue}`)
	});
/*
بالمثال اللي فوق رجع ايررور واحد لانو تشيند يعني متصلين 
chaining
*/


myPromise.then(
	(resolveValue) => {
		resolveValue.length = 2;
		return resolveValue;
	}).then(
	(resolveValue) => {
		resolveValue.length = 1;
		return resolveValue;
	}).then(
	(resolveValue) => {
		resolveValue.length = 1;
		console.log(`The choosen Employee is ${resolveValue}`)
	}).catch((rejectedReason) => console.log(rejectedReason))
	.finally(console.log("the operation is done!"));

/*
هون بالمثال اللي قبل استعملنا 
catch and finally
الكاتش هون رجعتلنا الاييرور المكتوب بالايلس بالروميس بدون اي مشاكل و الفاينلي هون نفذت طباعة بالكونسل بغض النظر عن حالة البروميس حتطبع
*/
