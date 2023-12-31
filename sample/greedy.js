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

// 화살 문제(어려움)
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let total = Number(input[0]); // 풍선의 개수
let bh = input[1].split(' ').map(Number); // 풍선의 높이
let result =0; // 화살 수
let arrow = new Array(1000001).fill(0) // 각 높이의 화살 수
for(let x of bh) {
  if(arrow[x]>0) { // 그 높이에 화살이 있는경우
    arrow[x]-=1;
    arrow[x-1] +=1;
  } else {
    arrow[x-1] +=1;
    result += 1; // 화살 쏘기
  }
}
console.log(result)

//
// 피보나치
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let total = Number(input[0]);
let pibo = [0,1];

// 피보나치 수열 생성
while(pibo[pibo.length-1]<1e9) pibo.push(pibo[pibo.length-1]+pibo[pibo.length-2])

for (let i=1; i<=total; i++) {
  let n = Number(input[i])
  let result = [] ;
  let index = pibo.length -1; // 피보 맨 끝
  while (n>0) {
    if(n>=pibo[index]) {
      n-=pibo[index];
      result.push(pibo[index]);
    }
    index--;
  }
  let answer ='';
  for (let k=result.length-1; k>=0; k-- ) {
    answer+=result[k]+' ';
  }
  console.log(answer)
}

// 공나누기
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let n=Number(input[0].split(' ')[0]);
let k=Number(input[0].split(' ')[1]);// N공, k바구니
let sum = 0;

for (let i=1; i<k+1; i++) {
    sum+=i;
}
if(sum>n) console.log(-1);
else {
n-=sum;
    if(n % k === 0) console.log(k-1);
    else console.log(k)
}

// 유사회문
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let T = Number(input[0]); // 문자열 수

const check = (x) => {
  // 회문 체크
  return x === x.split("").reverse().join("");
};

for (let i = 1; i <= T; i++) {
  let origin = input[i];
  if (check(origin)) console.log(0);
  else {
    let check2 = false; // 유사회문 체크
    let n = origin.length;
    for (let j = 0; parseInt(n / 2); j++) {
      if (origin[j] !== origin[n - j - 1]) { // 대칭이 아닌 인덱스를 찾은 경우
        // 앞쪽에 있는 해당 원소를 제거해 본 뒤에 회문 검사
        if (check(origin.slice(0, j) + origin.slice(j + 1, n))) check2 = true;
        // 뒤쪽에 있는 해당 원소를 제거해 본 뒤에 회문 검사
        if (check(origin.slice(0, n - j - 1) + origin.slice(n - j, n)))
          check2 = true;
        break;
      }
    }
    if (check2) console.log(1);
    else console.log(2);
  }
  // let reverse = [...origin].reverse(); // 원본 분해 후 뒤집기
  // let result = 0;

  // for(let j=0; j<origin.length; j++) {
  //   if(origin[j] !== reverse[j]) {
  //     result += 1;
  //   }
  // }
  // console.log(result)
}

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// 박스체우기
// x보다 작거나 같으면서 가장 가까운 2^i를 찾는 함수
function nearestSquare(x) {
  let i =1;
  while((2**i)<=x) i+=1;
  return i-1;
}

let length = Number(input[0].split(' ')[0]);
let width  = Number(input[0].split(' ')[1]);
let height  = Number(input[0].split(' ')[2]);
let cubes = Array(20).fill(0); // 큐브 개수 들어갈 배열

let n = Number(input[1]);
for(let i=2; i<=n+1; i++) { // 배열에 큐브 개수 입력
  let a= Number(input[i].split(' ')[0]);
  let b = Number(input[i].split(' ')[1]);
  cubes[a]=b;
}

// 가장 가까운 2^i 찾기
let size = 19;
size = nearestSquare(length);
size = Math.min(size, nearestSquare(width));
size = Math.min(size, nearestSquare(height));

let res= 0;
let used =0;

for (let i=size; i>=0; i--) {
  used *= 8; // 채널, 너비, 높이가 2씩 줄었으므로 큐브의 개수는 8배 증가
  cur = (2**i); // 현재의 정육면체 큐브의 길이
  // 채워 넣어야 할 큐브의 개수 계산
  let required = parseInt(length/cur)*parseInt(width/cur)*parseInt(height/cur)-used;

  let usage = Math.min(requred, cubes[i]); // 이번 단게에서 넣을 수 있는 큐브의 개수
  res += usage;
  used += usage;
}

if(used==length*width*height) console.log(res); // 박스를 가득 채운 경우
else console.log(-1); // 박스를 가득 채우지 못한 경우

