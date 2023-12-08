class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex]
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

// 구현된 큐 라이브러리 사용
queue = new Queue();

// 삽입
queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(3);
// 삭제
queue.dequeue();

console.log(queue)
// Queue { items: { '1': 2, '2': 3 }, headIndex: 1, tailIndex: 3 }

// 먼저 들어온 순서대로 출력
while (queue.getLength() != 0) {
  console.log(queue.dequeue());
}