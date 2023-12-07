let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let data = input[0].split(' ')
// trim() 사용하면 문자열 양끝 공백 제거 가능
// let data = input[0].trim().split(' ')
let check = [];
for(let i=0; i<data.length; i++) {
  if(data[i]) check.push(data[i])
}
console.log(check.length)

