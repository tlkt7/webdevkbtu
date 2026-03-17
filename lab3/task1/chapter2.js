'use strict';

let name = 'John';
let admin = name;
console.log(admin);

let planetName = 'Earth';
planetName = 'Mars';
console.log(planetName);

console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof 10n);
console.log(typeof true);
console.log(typeof 'foo');
console.log(typeof Symbol('id'));
console.log(typeof Math);
console.log(typeof null);
console.log(typeof console.log);

let a = 1;
let b = 1;

let c = ++a;
let d = b++;

console.log(a, b, c, d);

console.log(5 | 3);
console.log(5 & 3);
console.log(5 ^ 3);
console.log(~5);

console.log(5 > 4);
console.log('apple' > 'pineapple');
console.log('2' > '12');
console.log(undefined == null);
console.log(undefined === null);
console.log(null == '\n0\n');
console.log(null === +'\n0\n');

const result1 = (a + b < 4) ? 'Below' : 'Over';
console.log(result1);

const message = (a < 3) ? 'Hi' : (a < 6) ? 'Hello' : (a < 10) ? 'Greetings' : 'Bye';
console.log(message);

console.log(null || 2 || undefined);
console.log(null || 2 && 3 || 4);

console.log(1 && null && 2);
console.log(1 && 2 && 3);

const xAlert = -1;
(xAlert > 0) || console.log('first');
(xAlert > 0) && console.log('second');

const userName = null;
console.log(userName ?? 'Anonymous');

const userHeight = 0;
console.log(userHeight ?? 180);

let loopI = 3;
while (loopI) {
  console.log(loopI--);
}

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

outer: for (let p = 2; p <= 10; p++) {
  for (let div = 2; div < p; div++) {
    if (p % div === 0) continue outer;
  }
  console.log(p);
}

const switchA = 2 + 2;
let switchResult;

if (switchA === 0) {
  switchResult = 'less';
} else if (switchA === 1) {
  switchResult = 'less';
} else if (switchA === 2 || switchA === 3) {
  switchResult = 'equal';
} else {
  switchResult = 'greater';
}
console.log(switchResult);

const switchB = +prompt || 3;
let switchMsg;
switch (switchB) {
  case 0:
    switchMsg = 'You entered 0';
    break;
  case 1:
    switchMsg = 'You entered 1';
    break;
  case 2:
  case 3:
    switchMsg = 'You entered 2 or 3';
    break;
  default:
    switchMsg = 'Other';
}
console.log(switchMsg);

function min(x, y) {
  return x < y ? x : y;
}

console.log(min(2, 5));
console.log(min(3, 3));
console.log(min(3, -1));

function pow(x, n) {
  let res = 1;
  for (let i = 0; i < n; i++) {
    res *= x;
  }
  return res;
}

console.log(pow(2, 3));
console.log(pow(3, 4));

const checkAge = function (age) {
  return age > 18 ? true : confirm('Did parents allow you?');
};

console.log(checkAge(20));

const double = (n) => n * 2;
const greet = (who) => `Hello, ${who}!`;
const ask = (question, yes, no) => (confirm(question) ? yes() : no());

console.log(double(3));
console.log(greet('Alice'));
