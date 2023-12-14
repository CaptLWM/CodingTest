let arr = Array.from({ legnth: 3000 }, () => Math.floor(Math.random() * 1000));

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // rkwkd wkrdms dnjsthdml dlseprtm
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    //스와프(swap)
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

console.log("arr", arr);
let startTime = new Date().getTime();
selectionSort(arr);
let endTime = new Date().getTime();

console.log("start-end", endTime - startTime, "ms");
