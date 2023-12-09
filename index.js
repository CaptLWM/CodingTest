let test = Array.from({length:30000}, ()=>Math.floor(Math.random()*1000));

function bubbleSort(arr) {
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

startTime = new Date().getTime();
bubbleSort(test);
endTime= new Date().getTime();

console.log('time', endTime-startTime)