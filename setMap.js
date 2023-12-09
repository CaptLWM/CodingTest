let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let n = input[0];
let k = input[1].split(' ').map(Number);
let temp = [...new Set(k)]
temp.sort((a,b)=>a-b);

let myMap=new Map();
for (let i=0; i<temp.length; i++ ) {
  myMap.set(temp[i],i);
}

let answer2 = '';
for (x of k) {
  answer2+=myMap.get(x) + ' ';
}

console.log(k, temp, answer2);
