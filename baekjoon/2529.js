let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let k = Number(input[0]);
let arr = input[1].split(" ");
let visited = new Array(10).fill(false); // 0~9
let current = '';
let result=[];
let first =''

function dfs(depth) {
  if (depth === k + 1) {
    // 부등호 사이사이 들어가니까
    let check = true;
    for (let i = 0; i < k; i++) {
      if (arr[i] === ">") {
        if (result[i] < result[i + 1]) check = false;
      } else if (arr[i] === "<") {
        if (result[i] > result[i + 1]) check = false;
      }
    }
    if (check) {
      current = "";
      for (let x of result) current += x + "";
      if (first === "") first = current;
    }
    return;
  }
  for (let i=0; i<10; i++) {
    if(visited[i]) continue; // 이미 고른 수는 무시
    visited[i]= true; // 방문처리
    result.push(i);
    dfs(depth + 1); // 재귀함수 호출
    visited[i] = false;
    result.pop()
  }
}

dfs(0);
console.log(current + '\n' + first)


// let [r, c] = input[0].split(' ').map(Number); // 맵 크기
// let arr =[];
// for (let i=1; i<=r; i++) arr.push(input[i]);

// let dx = [-1,1,0,0]; // 상, 하, 좌, 우 방향
// let dy = [0,0,-1,1];
// let visited = new Set(); // 방문한 적 있는 알파벳 집합
// let maxDepth = 0; // 최대 깊이

// function dfs(depth, x, y) {
//   maxDepth = Math.max(maxDepth, depth);
//   for (let i=0; i<4; i++) { // 방향 : 상하좌우
//     let nx = x + dx[i];
//     let ny = y + dy[i];
//     if (nx < 0 || nx >=r || ny < 0 || ny>=c) continue; // 맵을 벗어난다면 무시
//     if(visited.has(arr[nx][ny])) continue; // 이미 가지고 있다면 무시
//     visited.add(arr[nx][ny]);//방문처리
//     dfs(depth+1, nx, ny); // 재귀함수 호출
//     visited.delete(arr[nx][ny]);// 방문 처리 해제
//   }
// }

// visited.add(arr[0][0]); // 왼쪽 위에서 출발
// dfs(1,0,0);
// console.log(maxDepth)
