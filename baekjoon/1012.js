let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// 1012 배추밭
// dfs 할때 어지간하면 인덱스 0 사용하지 않도록 하면 직관적이고 좋음
// 인접리스트 생성
let testCase = Number(input[0]); // 테스트 케이스
let line = 1;

function dfs(graph, n, m, x, y) {
  // 주어진 범위 벗어나면 즉시 종료
  if (x <= -1 || x >= n || y <= -1 || y >= m) return false;
  // 현재 노드 처리하지 않았다면
  if (graph[x][y] === 1) {
    // 해당노드 방문 처리
    graph[x][y] = -1;
    // 상, 하, 좌, 우의 위치들도 모두 재귀적으로 호출
    dfs(graph, n, m, x - 1, y);
    dfs(graph, n, m, x, y - 1);
    dfs(graph, n, m, x + 1, y);
    dfs(graph, n, m, x, y + 1);
    return true;
  }
  return false;
}

while (testCase--) {
  // 배추 밭 크기, 위치의 수
  let [m, n, k] = input[line].split(" ").map(Number);
  let graph = []; //그래프 정보
  for (let i = 0; i < n; i++) {
    graph[i] = new Array(m);
  }
  for (let i = 1; i <= k; i++) {
    let [y, x] = input[line + i].split(" ").map(Number); // 가로 위치는 y, 세로 위치는 x
    // console.log(y,x)
    graph[x][y] = 1;
  }
  let answer = 0; // 연결 요소 수
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(graph, n, m, i, j)) answer++; // 현재 위치에서 dfs 수행
    }
  }
  line += k + 1;
  console.log(answer);
}
