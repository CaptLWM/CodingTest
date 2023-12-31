let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// N과 M 15652

let [n, m] = input[0].split(" ").map(Number); // 1부터 N가지 자연수 중에서 중복없이 M개를 고른 조합
let arr = []; // 조합을 계산하고자 하는 원소(element)가 담긴 배열
for (let i = 1; i <= n; i++) arr.push(i);
// let visited = new Array(n).fill(false); // 각 원소 인덱스 별 방문 여부
let selected = [];

let answer = "";
function dfs(arr, depth, start) {
  if (depth === m) {
    // 모든 조합을 확인하는 부분
    // console.log('selected',selected)
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + " "; // 계산된 조합을 실질적으로 처리하는 부분
    answer += "\n";
    return;
  }
  for (let i = start; i < arr.length; i++) {
    // start 지점부터 하나씩 원소 인덱스를 확인
    // if(visited[i]) continue; // 중복을 허용하지 않으므로 이미 처리된 원소라면 무시
    selected.push(i); // 현재 원소 선택

    dfs(arr, depth + 1, i); // 중복조합이므로 재귀함수 호출 시 인덱스 유지
    selected.pop(); // 현재원소 선택 취소
  }
}

dfs(arr, 0, 0);
console.log(answer);
