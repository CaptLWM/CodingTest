// 빠른 A+B
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let testCase = Number(input[0]);
let answer='';

for(let t=1; t<=testCase; t++) {
  let data = input[t].split(' ');
  answer += Number(data[0]) + Number(data[1]) + `\n`;
}

console.log(answer)