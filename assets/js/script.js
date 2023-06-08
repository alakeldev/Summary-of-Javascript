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



*//*//*///*//*
