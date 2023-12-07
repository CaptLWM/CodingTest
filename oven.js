let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let c = Number(input[1]);

let totalMin = a * 60 + b + c; // 분의 형태로 변경
totalMin %= 1440;

let hour = parseInt(totalMin / 60);
let min = totalMin & 60;

console.log(`${hour} ${min}`);
