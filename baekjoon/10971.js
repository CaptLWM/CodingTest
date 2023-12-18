let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// 외판원 10971
/** 
  1번노드에서 시작한다고 가정하고 고민 시작 => 어쨌든 1번을 지나야 하기 때문
*/
let n = Number(input[0]);
let graph = [];
for (let i = 0; i <= n; i++) {
  graph.push([0]); // 인접행렬 방식을 사용하기위해 인덱스 0 자리에 임의의 값을 넣어준것
  // [ [ 0 ], [ 0 ], [ 0 ], [ 0 ], [ 0 ] ]
}

console.log(graph);
for (let i = 1; i <= n; i++) {
  line = input[i].split(" ").map(Number);
  for (let j = 0; j < n; j++) {
    graph[i].push(line[j]);
  }
}
let visited = new Array(11).fill(false); // 방문 처리 배열
let result = []; // 순열 정보
let minValue = 1e9;
// console.log(graph);
function dfs(depth) {
  if (depth === n - 1) {
    let totalCoast = 0; // 현재 순열에 대한 처리
    let cur = 1; // 1번 노드에서 출발
    for (let i = 0; i < n - 1; i++) {
      // 현재 순열에 따라서 노드 이동
      let nextNode = result[i]; // 다음 이동 노드까지의 비용 계산
      let cost = graph[cur][nextNode];
      if (cost === 0) return; // 이동불가는 무시
      totalCoast += cost; // 비용 더하고
      cur = nextNode; // 노드 이동
    }
    // 마지막 노드에서 1로 돌아와야함

    let cost = graph[cur][1];
    if (cost === 0) return; // 이동불가능은 무시
    totalCoast += cost; // 비용 더하고
    minValue = Math.min(minValue, totalCoast); // 경로의 최소 비용 저장
  }
  for (let i = 2; i <= n; i++) {
    if (visited[i]) continue;
    result.push(i); // 방문처리
    visited[i] = true;
    dfs(depth + 1); // 재귀 함수 호출
    result.pop(); // 방문처리 해제
    visited[i] = false;
  }
}
dfs(0);
console.log(minValue);
