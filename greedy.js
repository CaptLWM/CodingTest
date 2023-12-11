// 동전
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let [n, total] = input[0].split(" ");

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

let cnt = 0;
let rest = Number(total);

for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] > rest) {
    cnt += 0;
  } else if (rest === 0) {
    return;
  } else {
    let test = parseInt(rest / arr[i]);
    cnt += test;
    rest = total % arr[i];
  }
}

console.log(cnt);
