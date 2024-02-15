let ants = "...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t";

let deafthAnts = ants.replace(/ant/g, " ");

let antsPartA = 0;
let antsPartN = 0;  
let antsPartT = 0;

for (let i = 0; i < deafthAnts.length; i++) {
  if (deafthAnts[i] === "a") {
    antsPartA++;
  } else if (deafthAnts[i] === "n") {
    antsPartN++;
  } else if (deafthAnts[i] === "t") {
    antsPartT++;
  }
}

console.log(`There are ${Math.max(antsPartA, antsPartN, antsPartT)} ants dead`);