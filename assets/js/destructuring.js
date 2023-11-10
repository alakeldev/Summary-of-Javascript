/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
/*Without Destructuring:*/
// let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];

/* With Destructuring */
let ages = [30, 26, 27];
let [john, mary, joe] = ages;

console.log(john);



// Destructuring objects
let jobs = {
    mike: "developer",
    jill:"designer",
    alicia: "HR"
}

let {mike, jill, alicia} = jobs;

console.log(mike);
console.log(jill);
console.log(alicia);



// Destructuring subsets


let languages = ["English", "French", "German","Spanish", "Japanese"];
let [johnNative, johnSecondary] = languages;

console.log(johnNative, johnSecondary); // english and french

let [, , maryNative, marySecondary] = languages;

console.log(maryNative, marySecondary);  // German Spanish



let languages2 = {
    firstLanguages: "English",
    secondLanguage: "French",
    thirdLanguages: "German",
    fourthLanguage: "Japanese"
}


let {firstLanguages, thirdLanguages} = languages2;
console.log(firstLanguages, thirdLanguages); // English German

// Using rest parameter syntax
let fruits = ["Apple", "Orange", "Banana", "Peach", "Cherry"];
let [favorite, secondfavor, ...others] = fruits;

console.log(favorite);
console.log(secondfavor);
console.log(others);



let favoriteFoods = {
    brian: "Pizza",
    anna: "Pasta",
    sarah: "Vergetarian",
    andrea: "Steak"
};

let {brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);