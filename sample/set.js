let mySet = new Set(); // 집합객체 생성

mySet.add(3);
mySet.add(5);

console.log(`${mySet.size}`)
console.log(`원소 7 있음? ${mySet.has(7)}`)

for (let item of mySet) console.log(item);