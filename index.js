let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let n = Number(input[0].split(" ")[0]); // 지방의 수
let arr = input[1].split(" ").map(Number); // 요청별 예산
let m = Number(input[2]); // 배정된 총 예산

let start = 1; // 이진탐색을 위한 시작점(start) 끝점(end) 설정
let end = arr.reduce((a, b) => Math.max(a, b));

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2); // 현재의 중간점(상한액)
  let total = 0; // 배정된 예산 총액 계산
  for (x of arr) {
    // 각 지방에서 요청한 예산을 하나씩 확인하며
    total += Math.min(mid, x); // 예산 배정
  }
  if (total <= m) {
    // 조건을 만족한다면
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
  console.log(mid, total, start, end)
}
console.log(result);

// function parametric(arr, total) {
//   let n = arr.length;
//   let avg = parseInt(total / n);
//   let a = 0;
//   for (let i = 0; i < n; i++) {
//     if (arr[i] <= avg) {
//       a += arr[i];
//       n--;
//     }
//   }

//   let limitPrice = parseInt((total - a) / n);
//   console.log(limitPrice);
// }

// let n = Number(input[0]); // 요청 수
// let tc = input[1].split(" ").map(Number); // 요청별 예산
// let total = Number(input[2]); // 배정된 총 예산

// let sum = 0;
// for (let i = 0; i < n; i++) {
//   sum += tc[i];
// }

// if (total > sum) console.log(Math.max(...tc));
// else parametric(tc, total);
