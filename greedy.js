let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let [n, total] = input[0].split(" ");

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

let cnt = 0;
let rest = Number(total);

for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] > rest) {
    cnt += 0;
  } else if (rest === 0) {
    return;
  } else {
    let test = parseInt(rest / arr[i]);
    cnt += test;
    rest = total % arr[i];
  }
}

console.log(cnt);

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let people = Number(input[0]);
let eachTime = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
console.log(eachTime);
let add = 0;
for (let i = 0; i < people; i++) {
  for (let j = 0; j < i + 1; j++) {
    add += eachTime[j];
  }
}

console.log(add);

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let n = input[0].split("-");

let result = 0;
for (let i = 0; i < n.length; i++) {
  let cur = n[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);
  if (i === 0) result += cur; // 첫 그룹 항상 덧셈
  else result -= cur;
}

console.log(result);


// 못품
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let n = Number(input[0]);
let cnt =0;
let flag = false;

while (n >= 0) {
  if(n===0 || n%5===0) {
    cnt += parseInt(n/5);
    console.log(cnt)
    flag=true;
    break;
  }
  n -=3;
  cnt+=1;
}
if(!flag) {
  console.log(-1)
}

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

// 못품
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let number = Number(input[0]);
let a = 0;
let b = 0;

while (b<=number) {
  a+=1;

  b+=a;
}
console.log(a-1)

// 모르겠음 1946

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

// 거리
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let city = Number(input[0]);
let distance = input[1].split(' ').map(Number);
let price = input[2].split(' ').map(Number);

let minPrice = price[0];
for (let i=0; i<city; i++) { // 비오름차순, 각 단계이후보다 싼걸로 대체(마지막 도시 제외)
  minPrice = Math.min(minPrice, price[i]);
  price[i] = minPrice;
}

let answer = BigInt(0);
for(let i=0; i<city-1; i++) { // 마지막도시는 상관 없음
  answer += BigInt(distance[i])*BigInt(price[i]);  
}
console.log(String(answer))

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let total = Number(input[0]);
let re = [];
for (let i = 1; i <= total; i++) {
  re.push(input[i].split(" ").map(Number));
}
re.sort((a, b) => { // 종류시점 비교, 시작시점 비교
  if(a[1] !== b[1]) return a[1]-b[1];
  else return a[0]-b[0]
});
console.log(re)

let cnt = 1;
let cur = 0; // 첫번재 회의부터
for (let i = 1; i < re.length; i++) {
  if(re[cur][1] <= re[i][0]) {
    console.log(re[cur])
    cur = i; // 현재회의 끝나고 다음회의
    cnt +=1;
  }
}

console.log(cnt);

