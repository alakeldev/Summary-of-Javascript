
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log(results);


// Using map()
const mltByTwo = function (num) {
  return num * 2;
}
const mapResults = nums.map(mltByTwo);
console.log(mapResults);

// Simplified w/ map()
const simMapResults = nums.map(function (num) { return num * 2; });
console.log(simMapResults);


// Simplfied w/ map() + arrow function
const verboseMap = nums.map(num => num * 2);
console.log(verboseMap);


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];


const studentsWithIds = students.map(student => [student.name, student.id]);

console.log(studentsWithIds);






const result = students.map(({ name, id }) => ({ name, id }));

console.log(result);







const ages = [25, 26, 27];

const resultage = students.map((student, index) => ({ ...student, age: ages[index] }));

console.log(resultage);
