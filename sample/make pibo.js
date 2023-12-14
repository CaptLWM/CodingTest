// 피보나치 수열 생성
let pibo = [0,1];
while(pibo[pibo.length-1]<1e9) pibo.push(pibo[pibo.length-1]+pibo[pibo.length-2])