let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

function dfs(depth, start) {
  if(depth === m) { // 각 조합을 확인하는 부분
    let result = []; // 조합 결과 저장 테이블
    for(let i of selected) result.push(chicken[i]);
    let sum=0; // 치킨 커리의 합
    for (let [hx, hy] of house) { // 모든 집에 대하여
      let temp = 1e9; // 가장 가까운 치킨 집을 찾기
      for(let [cx, cy] of result) {
        temp = Math.min(temp, Math.abs(hx-cx) + Math.abs(hy-cy))
      }
      sum += temp; // 가장 가까운 치킨 집까지의 거리를 더하기
    }
    answer = Math.min(answer, sum) // 최소값 계산
  return;    
  }
  // start 지점부터 하나씩 원소 인덱스를 확인하며
  for(let i=start; i<chicken.length; i++) {
    if(visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(depth+1, i+1); // 조합이므로 재귀함수 호출시 다음 인덱스 추가
    selected.pop();
    visited[i] = false;
  }
}

let [n,m] = input[0].split(' ').map(Number); // 도시의 크기, 치킨집 개수
let chicken = []; // 전체 치킨집 위치 배열
let house = []; // 전체 집 위치 배열
for (let i=1; i<=n; i++) { // 전체 도시 정보 입력받기
  let line = input[i].split(' ').map(Number); // 빈칸(0), 집(1), 치킨집(2)
  for (let j=0; j<n; j++) {
    if(line[j]===1) house.push([i,j]); // 집
    if(line[j]===2) chicken.push([i,j]); // 치킨
  }
}

let visited = new Array(chicken.length).fill(false); // 각 치킨집 방문 여부
let selected = [];

let answer = 1e9;
dfs(0,0)
console.log(answer)