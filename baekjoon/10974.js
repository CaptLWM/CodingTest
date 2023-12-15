let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// 10974
let n = Number(input[0]);
let arr = []; // 순열 계산하려는 원소가 담긴 배열
for(let i=1; i<=n ; i++) arr.push(i);
let visited = new Array(n).fill(false); // 각 원소 index별 방문 여부
let selected = []; // 현재 순열에 포함된 원소

let answer ='';

function dfs (arr, depth) {
  if(depth === n) { // 모든 순열을 확인하는 부분
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + ' ';// 계산된 순열 실질 처리
    answer += '\n';
    return; // 순열 계산 종료
  }
  for(let i=0; i<arr.length; i++) { // 하나씩 원소 인덱스(index)를 확인
    if(visited[i]) continue; // 이미 처리된 원소면 무시
    selected.push(i); // 현재 원소 선택
    visited[i] = true; // 현재 원소 방문 처리
    dfs(arr, depth+1); // 재귀함수 호출
    selected.pop();
    visited[i]=false;
  }
}

dfs(arr,0);
console.log(answer)
