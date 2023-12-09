let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let n = input[0].split('').sort((a,b)=>b-a);
let answer ='';
for(let i=0; i<n.length;i++) {
  answer+=n[i];
}

console.log(answer)