// readline
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  // 콘솔 입력창에서 줄바꿈(Enter)를 입력할 때마다 호출
  input.push(line);
}).on("close", function () {
  // 콘솔 입력 창에서 Ctrl+C, Ctrl+D를 입력하면 호출(입력 종료)
  console.log("input");
  process.exit();
});
