let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// 9663 N-Queen NxN 퀸 N개 

let n = Number(input[0]);
let queens = [];

function possible(x,y) { // 퀸 놓을 조건
  for (let [a,b] of queens) {
    if(a===x || b===y) return false;
    if(Math.abs(a-x)===Math.abs(b-y)) return false;
  }
  return true;
}
let cnt = 0;
function dfs(row) {
  if(row===n) cnt += 1; // 퀸을 N개 배치할 수 있는 경우 카운트
  for(let i=0; i<n; i++) { // 현재 행에 존재하는 열을 하나씩 확인하며
    if(!possible(row,i)) continue;// 현재 위치에 놓을 수 없다면 무시
    queens.push([row, i]); // 현재 위치에 퀸을 놓기
    dfs(row+1); // 재귀함수 호출
    queens.pop(); // 현재 위치에서 퀸을 제거
  }
}

dfs(0);
console.log(cnt);