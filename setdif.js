// 빠른 A+B
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let number = input.map((x) => Number(x));
// 같지 않은 수 => set(집합)
let mySet = new Set();

for (let i = 0; i < number.length; i++) {
  mySet.add(number[i] % 42);
}

console.log(mySet.size);
