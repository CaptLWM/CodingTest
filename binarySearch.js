// 이진탐색코드예시(재귀함수)

function binarySearch(arr, target, start, end) {
  if (start > end) return -1;
  let mid = parseInt((start + end) / 2);
  // 찾은 경우 중간점 인덱스 반환
  if (arr[mid] === target) return mid;
  // 중간점의 값 보다 찾고자 하는 값이 작은 경우 왼쪽 확인
  else if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
  // 중감점의 값보다 찾고자 하는 값이 큰 경우 오른족 확인
  else return binarySearch(arr, target, mid + 1, end);
}

// n(원소의 개수), target(찾고자 하는 값)
let n = 10;
let target = 7;
arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// 이진탐색 수행결과 출력
let result = binarySearch(arr, target, 0, n - 1);
if (result === -1) console.log("원소가 없음");
else console.log(`${result + 1}번째`);

// 반복문
function binarySearch2(arr, target, start, end) {
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] === target) return id;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}
