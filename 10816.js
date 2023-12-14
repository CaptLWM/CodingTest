let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// 숫자카드 #10816, lowerbound, upperbound
let n = Number(input[0]); // 숫자카드 개수
let arr = input[1].split(' ').map(Number).sort((a,b)=>a-b); // 가지고 있는 정수
let m = Number(input[2]); // 찾아야할 수의 개수
let example = input[3].split(' ').map(Number); // 찾아야 하는 정수

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동
    else start = mid + 1;
  }
  return end;
}

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 오른쪽 인덱스 반환
function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid; // 타겟보다 큰값들중 가장 왼쪽
    else start = mid + 1; // 최대한 오른쪽으로 이동
  }
  return end;
}
// countByRange();
function countByRange(arr, leftValue, rightValue) {
  // 유의 : lowerBound와 upperBound는 end 변수의 값을 배열의 길이로 설정
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
}

let answer = '';
for(let i=0; i<m; i++) {
  // 값이 example[i] 인 데이터의 개수 계산
  let cnt = countByRange(arr, example[i],example[i]);
  answer += cnt +' ' ;
}
console.log(answer)