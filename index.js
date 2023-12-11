// 모르겠음

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let testCase = Number(input[0]); // 테스트 케이스
let line = 1;
for (let tc = 0; tc < testCase; tc++) {
  n = Number(input[line]); // 케이스별 인원수
  let arr = [];
  for (let i = line + 1; i <= line + n; i++) {
    let data = input[i].split(" ").map(Number);
    arr.push(data);
  }
  arr.sort((x, y) => x[0] - y[0]); // x 순위를 기준으로 오름차순
  let count = 0;
  let minvalue = 100001; // 가장낮은순위 + 1
  for (let [x, y] of arr) {
    if (y < minvalue) {
      // 순위값이 가장 작다면 카운트
      minvalue = y;
      count += 1;
    }
  }
  console.log(count);
  line += n + 1;
}
