// 그룹단어인지 체크하는 함수
// a 부터 z 까지 총 26 개의 알파벳이 있다
// 각 알파벳에 대하여 연속해서 등장한 횟수가 1 번인지 체크 한다
function check(data) {
  let setData = new Set(data[0]);
  for (let i = 0; i < data.length - 1; i++) {
    // 오른쪽 단어와 다르다면
    if (data[i] != data[i + 1]) {
      if (setData.has(data[i + 1])) {
        return false;
      } else {
        setData.add(data[i + 1]);
      }
    }
  }
  return true;
}
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let testCase = Number(input[0]);
let result = 0;

for (let i = 1; i <= testCase; i++) {
  let data = input[i];
  if (check(data)) result += 1;
}

console.log(result);
