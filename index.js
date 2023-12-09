let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let n = input[0];
let k = [];
for (let i = 1; i <= n; i++) {
  k.push(input[i]);
}

k = [...new Set(k)];

console.log(k);
k.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  else {
    if (a<b) return -1;
    else if(a>b) return 1;
    else return 0;
  }
});

let answer = "";
for (let j = 0; j < k.length; j++) {
  answer += k[j] + "\n";
}

console.log(answer);
