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

let arr = [1, 2, 3, 3, 3, 3, 3, 4, 4, 5, 8, 9];
console.log(countByRange(arr, 4, 4));
console.log(countByRange(arr, -1, 3));
