let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// N과 M 15651 중복 순열
let [n, m] = input[0].split(' ').map(Number);
let arr = []; // 순열 계산하려는 원소가 담긴 배열
for(let i=1; i<=n ; i++) arr.push(i);
// let visited = new Array(n).fill(false); // 방문체크할 필요 없음
let selected = []; // 현재 순열에 포함된 원소

let answer ='';

function dfs (arr, depth) {
  if(depth === m) { // 모든 순열을 확인하는 부분
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + ' ';// 계산된 순열 실질 처리
    answer += '\n';
    return; // 순열 계산 종료
  }
  for(let i=0; i<arr.length; i++) { // 하나씩 원소 인덱스(index)를 확인
    selected.push(i); // 현재 원소 선택
    dfs(arr, depth+1); // 재귀함수 호출
    selected.pop();
  }
}

dfs(arr,0);
console.log(answer)

