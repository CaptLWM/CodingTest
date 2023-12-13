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

// let total = input[0].split(" ").map(Number); // 전체 박스 크기
// let buf = total[0] * total[1] * total[2]; // 박스 부피
// let n = Number(input[1]); // 큐브 종류 개수
// let result = 0;

// for (let i = n + 1; i > 1; i--) {
//   console.log("aaa", buf);
//   //큐브 큰거부터 시작
//   let cubelength = Number(input[i].split(" ")[0]);
//   let k = Number(input[i].split(" ")[1]); // 큐브 개수
//   let cube = (2 ** cubelength) ** 3; // 큐브 크기
//   console.log(cube)
//   if (buf % cube === 0) {
//     if (parseInt(buf / cube) > k) {
//       console.log('a')
//       result += k;
//       buf -= k * cube;
//     } else {
//       console.log('b')
//       result += parseInt(buf / cube);
//       buf -= parseInt(buf / cube) * cube;
//     }
//   } else {
//     if (parseInt(buf / cube) > k) {
//       console.log('c')
//       result += k;
//       buf -= k * cube;
//     } else {
//       console.log('d')
//       result += parseInt(buf / cube);
//       buf -= parseInt(buf / cube) * cube;
//     }
//   }
// }

// console.log(result);
