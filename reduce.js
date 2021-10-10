  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
// acc = accumulator
// curr = current value

const numbers = [0, 1, 2, 3, 4];

// one line:
// let sum = numbers.reduce((acc, curr) => acc + curr, 0);

// console log at every step

const sum = numbers.reduce((acc, curr) => {
  console.log(
    "Accumulator:", acc,
    "Current value:", curr,
    "Total:", acc + curr
  );
  return acc + curr;
// we can specify initial value, than function runs 5 times
// if we do not set initial value, the reduce method automaticly takes the value of the first element
}, 10);
console.log("Started from 10:", sum)



const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  },
  {
    name: 'Mark',
    profession: 'Manager',
    yrsExperience: 10
  }
];

// Totaling a specific object property

let sumOfYears = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(sumOfYears);

// Grouping by a property, and totaling it too

let experienceByProffesion = teamMembers.reduce((acc, curr) => {
  let key = curr.profession
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
return acc;
}, {});

console.log(experienceByProffesion);