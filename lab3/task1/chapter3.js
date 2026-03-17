'use strict';

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow(2, 10));

console.log(pow(2, 3) === 8 ? 'PASS' : 'FAIL');
console.log(pow(3, 4) === 81 ? 'PASS' : 'FAIL');
