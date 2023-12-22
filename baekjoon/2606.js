let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// 2606 바이러스
// dfs 할때 어지간하면 인덱스 0 사용하지 않도록 하면 직관적이고 좋음
// 인접리스트 생성
let n = Number(input[0]); // 컴퓨터 수(노드수)
let m = Number(input[1]); // 연결된 컴퓨터 쌍 수
let graph = [];
let cnt = 0;
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 2; i <= m + 1; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let visited = new Array(n + 1).fill(false);

function dfs(x) {
  // 현재 노드를 방문 처리
  visited[x] = true;
  cnt += 1;
  // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  for (y of graph[x]) {
    if (!visited[y]) {
      dfs(y);
    }
  }
}
dfs(1);
console.log(cnt - 1);
// for (let i = 2; i<m+2; i++) {
//   let temp = input[i].split(' ').map(Number);
//   graph.push(temp)
//   // console.log(graph[temp[1]].push(temp[0]))
// }

// console.log(graph)

// visited = Array(n+1).fill(false);

// function dfs(graph, v, visited) {
//    visited[v] = true; //
//    cnt +=1;
//   for (let i =v; i<=n; i++) {
//     if(graph[v])
//   }
// }
