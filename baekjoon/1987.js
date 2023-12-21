// 시간초과
// let fs = require("fs");
// let input = fs.readFileSync("input.txt").toString().split("\n");

// // 1987
// let [r, c] = input[0].split(" ").map(Number); // 맵 크기
// let arr = [];
// for (let i = 1; i <= r; i++) arr.push(input[i]);

// let dx = [-1, 1, 0, 0]; // 상, 하, 좌, 우 방향
// let dy = [0, 0, -1, 1];
// let visited = new Set(); // 방문한 적 있는 알파벳 집합
// let maxDepth = 0; // 최대 깊이

// function dfs(depth, x, y) {
//   maxDepth = Math.max(maxDepth, depth);
//   for (let i = 0; i < 4; i++) {
//     // 방향 : 상하좌우
//     let nx = x + dx[i];
//     let ny = y + dy[i];
//     if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue; // 맵을 벗어난다면 무시
//     if (visited.has(arr[nx][ny])) continue; // 이미 가지고 있다면 무시
//     visited.add(arr[nx][ny]); //방문처리
//     dfs(depth + 1, nx, ny); // 재귀함수 호출
//     visited.delete(arr[nx][ny]); // 방문 처리 해제
//   }
// }

// visited.add(arr[0][0]); // 왼쪽 위에서 출발
// dfs(1, 0, 0);
// console.log(maxDepth);

const [n,...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [maxY, maxX] = n.split(" ").map(Number);
const graph = input.map((value) => value.split(""));

const dx = [0,0,1,-1];
const dy = [1,-1, 0,0]

let count = 0;

const visited = new Set(graph[0][0]);


function dfs(depth, y, x) {
    count = Math.max(count, depth);
    for(let i = 0; i<4; i++) {
        if(check(y+dy[i], x+dx[i]) == false) continue;
        visited.add(graph[y+dy[i]][x+dx[i]]);
        dfs(depth + 1, y+dy[i], x+dx[i]);
        visited.delete(graph[y+dy[i]][x+dx[i]]);
    }

}

function check(y, x) {
    if(y < 0 || x < 0 || x>= maxX || y >= maxY) {
        return false;
    } else if(visited.has(graph[y][x])) {
        return false;
    }
    return true
}

dfs(1,0,0)
console.log(count)
