let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

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

// 병사 배치하기 // 감도 안옴

/** 
  특정한 위치의 병사를 열외시키는 방법, 그러면서도 남아있는 병사의 수가 최대로
  가장 긴 증가하는 부분수열을 찾는 문제(LIS) => 부분수열 : 주어진 수열의 일부 항을 원래 순서대로 나열하여 얻을 수 있는 수열
  여기서는 가장 긴 감소하는 부분수열
  아이디어 현재 원소가 가장 크다면 뒤에 삽입하고 그렇지 않으면 최대한 왼쪽의 원소와 교체
*/
let n = Number(input[0]); // 병사들의 수
let arr = input[1].split(' ').map(Number); // 병사가 가진 전투력

arr.reverse(); // 순서 변경 => 최장 증가 부분수열로 변경
let d=[0]; // LIS 배열
for (x of arr) {
  if(d[d.length-1] < x) { // 마지막보다 크면 오른쪽에 추가
    d.push(x);
  } else { // 가장 왼쪽의 원소 변경
    let index = lowerBound(d, x, 0, d.length);
    d[index] = x;
  }
}

console.log(n-(d.length-1))