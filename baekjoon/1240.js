let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// 1024 노드 사이의 거리
// 문제에서 주어지는 간선의 개수 N-1 => 경로는 오직 1개
let [n, m] = input[0].split(' ').map(Number);
let graph=[]; // 트리 정보 입력
for (let i =1; i<=n; i++ ) {
  graph[i]=[];
}
for(let i=1; i<n;i++) {
  let [x,y,cost]=input[i].split(' ').map(Number);
  graph[x].push([y,cost]); // x에서 y로 가는 비용
  graph[y].push([x,cost]); // y에서 x로 가는 비용
}
// let visited = new Array(n+1).fill(false);
// let distance = new Array(n+1).fill(-1);


console.log(graph)

function dfs(x, dist) {
  if(visited[x]) return;//각 노드는 한번만 방문
  visited[x] = true; // 방문처리
  distance[x] = dist;
  for(let [y, cost] of graph[x]) dfs(y, dist+cost);
}

for(let i=0; i<m; i++) {
  let[x,y] = input[n+i].split(' ').map(Number); // 거리구할 노드 쌍
  visited = new Array(n+1).fill(false);
  distance = new Array(n+1).fill(-1);
  dfs(x,0);
  // console.log(distance)
  console.log(distance[y])
}
