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
      if (origin[j] !== origin[n - j - 1]) {
        if (check(origin.slice(0, j) + origin.slice(j + 1, n))) check2 = true;
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
