let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// 6603

function dfs(arr, depth, start) {
  if (depth === 6) {
    let result = []; // 조합 결과 저장 테이블
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + " "; // 계산된 조합을 실질적으로 처리하는 부분
    answer += "\n";
    return;
  }
  for (let i = start; i < arr.length; i++) {
    if (visited[i]) continue; // 중복을 허용하지 않기때문에 처리된 원소 무시
    selected.push(i);
    visited[i] = true; // 방문처리
    dfs(arr, depth + 1, i + 1); // 재귀 함수 호출

    selected.pop(); // 방문처리 해제
    visited[i] = false;
  }
}

for (let i = 0; i < input.length; i++) {
  let data = input[i].split(" ").map(Number);
  if (data[0] === 0) break;
  else {
    n = data[0];
    arr = data.slice(1);
    visited = new Array(n).fill(false);
    selected = [];
    answer = "";
    dfs(arr, 0, 0);
    console.log(answer);
  }
}
// dfs(0, 0);
// console.log(answer);
