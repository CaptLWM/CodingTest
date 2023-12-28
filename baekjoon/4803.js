let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// 4803 트리
// 특정 노드에서 DFS를 수행하는 과정에서 '인접노드가 이미 방문한 노드라면' 사이클
// 단 무방향 그래프 이므로 직전 노드는 제외

// 무방향 그래프에서 사이클 여부 확인
function isCycle(x, prev) {
   // 현재 노드 방문 처리
  visited[x] = true;
  // 다음 노드(인접 노드)를 하나씩 확인
  for(let y of graph[x]) {
    if(!visited[y]) { // 다음 노드를 아직 방문하지 않았다면
      // 다음 노드 기준으로 사이클이면
      if(isCycle(y,x)) return true; // 사이클 발생
    }
      // 방문한 적 있는 노드 인데, 직전 노드가 아니라면(무방향 그래프)
    else if (y !== prev) return true;
  }
  return false;
}

let line = 0;
let testCase = 1;
while(true) {
  let [n, m] = input[line].split(' ').map(Number);
  if(n ===0 && m === 0) break;
  graph=[];
  for (let i =1; i<=n; i++ ) {
    graph[i]=[];
  }
  for(let i=1; i<=m;i++) {
    let [x,y] = input[line + i].split(' ').map(Number);
    graph[x].push(y); // x에서 y로 가는 비용
    graph[y].push(x); // y에서 x로 가는 비용
  }
  visited = new Array(n+1).fill(false); // 방문 처리 배열
  let cnt = 0; // 그래프 내 트리으 개수
  for (let i=1; i<=n; i++) { // 하나씩 노드 확인
      if(!visited[i]) {
        if(!isCycle(i,0)) cnt++;
      }
  }
  if (cnt > 1) {
    console.log(`Case ${testCase} : A forest of ${cnt} trees.`);
  } else if (cnt === 1) {
    console.log(`Case ${testCase} : There is one tree.`);
  } else {
    console.log(`Case ${testCase} : No trees`);
  }
  line += m+1; // 다음 케이스로 이동
  testCase++;
}

// 내 풀이
// let [n, m] = input[0].split(' ').map(Number);
// let graph=[]; // 트리 정보 입력
// let cnt = 0;
// for (let i =1; i<=n; i++ ) {
//   graph[i]=[];
// }
// for(let i=1; i<m+1;i++) {
//   let [x,y] = input[i].split(' ').map(Number);
//   graph[x].push([y]); // x에서 y로 가는 비용
//   graph[y].push([x]); // y에서 x로 가는 비용
// }

// for(let i=1; i<=n; i++) {
//   if(graph[i].length===1) {
//     cnt++;
//   } else if(graph[i].length === 0) {
//     cnt += 2;
//   } else continue;
// }

// if (cnt/2 > 1) {
//   console.log(`Case : A forest of ${cnt/2} trees.`);
// } else if (cnt/2 === 1) {
//   console.log(`Case : There is one tree.`);
// } else {
//   console.log(`Case : No trees`);
// }

// console.log(graph)
