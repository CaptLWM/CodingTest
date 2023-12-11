// 못품
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let start = Number(input[0].split(' ')[0]);
let target = Number(input[0].split(' ')[1]);
let flag = false;
let result = 1;

while (start <= target) {
  if(start===target) {
    flag=true;
    break;
  }
  if(target %2 ===0) target = parseInt(target/2);
  else if(target %10===1) target=parseInt(target/10);// 1의 자릿수가 1인 경우 => 1의 자릿수를 제거하기 위함
  else break;
  result ++;
}
if(flag) console.log(result);
else console.log(-1);

