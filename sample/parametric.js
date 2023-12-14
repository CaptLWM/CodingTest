let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let k = Number(input[0].split(" ")[0]); // 가지고 있는 랜선 수
let n = Number(input[0].split(" ")[1]); // 필요한 랜선 수
let arr = []; // 각 랜선 길이
for (let i = 1; i <= k; i++) {
  arr.push(Number(input[i]));
}

let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));

let result = 0;
while (start <= end) {
  // console.log("start", start, end);
  let mid = parseInt((start + end) / 2);
  // console.log("mid", mid);
  let total = 0;
  for (x of arr) {
    total += parseInt(x / mid);
    // console.log("total", total);
  }
  // console.log("n", n, total);
  if (total >= n) {
    // console.log("a");
    result = mid;
    start = mid + 1;
  } else {
    // console.log("b");
    end = mid - 1;
  }
}

console.log(result);

/** 
해설

let k = Number(input[0].split(' ')[0]);
let n = Number(input[0].split(' ')[1]);

let arr = [];
for (let i=1; i<=k; i++) arr.push(Number(input[i]));

let start =1;
let end = arr.reduce((a,b)=>Math.max(a,b));

let result=0;
while (start<=end) {
  let mid = parseInt((start+end)/2);
  let total=0;
  for (x of arr) total += parseInt(x/mid);
  if(total<n) end = mid-1; // 만들 수 있는 랜선의 개수가 부족한 경우 길이 줄임
  else { // 만들 수 있는 랜선의 개수가 충분한 경우 길이 늘이기
    result = mid; // 최대 길이를 찾아야 하므로 result에 기록
    start = mid + 1;
  }
}
*/
