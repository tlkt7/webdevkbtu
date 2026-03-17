'use strict';

function sumInputNumbers(a, b) {
  const x = Number(a);
  const y = Number(b);
  return x + y;
}

console.log(sumInputNumbers('3', '5'));

console.log((6.35).toFixed(1));
console.log((6.35).toPrecision(20));

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rnd = getRandomInt(1, 10);
console.log(rnd, rnd >= 1 && rnd <= 10);

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

const rndFloat = getRandom(1, 5);
console.log(rndFloat, rndFloat >= 1 && rndFloat <= 5);

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst('john'));
console.log(ucFirst(''));

function checkSpam(str) {
  const lower = str.toLowerCase();
  return lower.includes('viagra') || lower.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('XXXfree'));
console.log(checkSpam('innocent rabbit'));

function truncate(str, maxlength) {
  if (str.length <= maxlength) return str;
  return str.slice(0, maxlength - 1) + '…';
}

console.log(truncate('What I\'d like to tell on this topic is:', 20));
console.log(truncate('Hi everyone!', 20));

function extractCurrencyValue(str) {
  return Number(str.slice(1));
}

console.log(extractCurrencyValue('$120'));

const fruitArr = ['Apples', 'Pear', 'Orange'];
const shoppingCart = fruitArr;
shoppingCart.push('Banana');

console.log(fruitArr.length);

const styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[Math.floor(styles.length / 2)] = 'Classics';
console.log(styles[styles.length - 1]);
styles.shift();
styles.unshift('Rap', 'Reggae');
console.log(styles);

function getMaxSubSum(arr) {
  let maxSum = 0;
  let currentSum = 0;

  for (const num of arr) {
    currentSum += num;
    if (currentSum < 0) currentSum = 0;
    if (maxSum < currentSum) maxSum = currentSum;
  }

  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, -2, -3]));

function camelize(str) {
  return str
    .split('-')
    .map((word, index) => (index === 0 ? word : word[0].toUpperCase() + word.slice(1)))
    .join('');
}

console.log(camelize('background-color'));
console.log(camelize('border-left-width'));

function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

const filterArr = [5, 3, 8, 1];
console.log(filterRange(filterArr, 1, 4));

function filterRangeInPlace(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < a || arr[i] > b) arr.splice(i, 1);
  }
}

const inPlaceArr = [5, 3, 8, 1];
filterRangeInPlace(inPlaceArr, 1, 4);
console.log(inPlaceArr);

const descArr = [5, 2, 1, -10, 8];
descArr.sort((a, b) => b - a);
console.log(descArr);

function copySorted(arr) {
  return arr.slice().sort();
}

const strArr = ['HTML', 'JavaScript', 'CSS'];
const sortedCopy = copySorted(strArr);
console.log(sortedCopy);
console.log(strArr);

function ExtendableCalculator() {
  const methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  };

  this.calculate = function (str) {
    const [aStr, op, bStr] = str.split(' ');
    const a = Number(aStr);
    const b = Number(bStr);

    if (!methods[op] || isNaN(a) || isNaN(b)) return NaN;
    return methods[op](a, b);
  };

  this.addMethod = function (name, fn) {
    methods[name] = fn;
  };
}

const extCalc = new ExtendableCalculator();
extCalc.addMethod('*', (a, b) => a * b);
extCalc.addMethod('**', (a, b) => a ** b);

console.log(extCalc.calculate('3 + 7'));
console.log(extCalc.calculate('10 - 2'));
console.log(extCalc.calculate('2 ** 3'));

const people = [
  { name: 'John', age: 25 },
  { name: 'Pete', age: 30 },
  { name: 'Mary', age: 28 },
];

const names = people.map((person) => person.name);
console.log(names);

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

const users = [
  { name: 'Pete', age: 30 },
  { name: 'John', age: 25 },
  { name: 'Mary', age: 28 },
];

sortByAge(users);
console.log(users.map((u) => u.name));

function getAverageAge(arr) {
  return arr.reduce((acc, person) => acc + person.age, 0) / arr.length;
}

console.log(getAverageAge(users));

function unique(arr) {
  return [...new Set(arr)];
}

const dupArr = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'];
console.log(unique(dupArr));

function groupById(arr) {
  return arr.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
}

const usersWithId = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

console.log(groupById(usersWithId));

const range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        }
        return { done: true };
      },
    };
  },
};

console.log([...range]);

const mapObj = { name: 'John', age: 30 };
const userMap = new Map(Object.entries(mapObj));
console.log(userMap.get('name'));

function aclean(arr) {
  const seen = new Map();
  for (const word of arr) {
    const key = word.toLowerCase().split('').sort().join('');
    if (!seen.has(key)) seen.set(key, word);
  }
  return [...seen.values()];
}

const anagrams = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
console.log(aclean(anagrams));

function mapKeys(mapA, mapB) {
  const result = new Set();
  for (const key of mapA.keys()) {
    if (mapB.has(key)) result.add(key);
  }
  return result;
}

const messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

const readMessages = new WeakSet();
readMessages.add(messages[0]);
readMessages.add(messages[2]);

console.log(readMessages.has(messages[0]));
console.log(readMessages.has(messages[1]));

function sumSalaries(salariesObj) {
  return Object.values(salariesObj).reduce((acc, salary) => acc + salary, 0);
}

const salariesObj = { John: 100, Pete: 300, Mary: 250 };
console.log(sumSalaries(salariesObj));

function count(obj) {
  return Object.keys(obj).length;
}

console.log(count({ a: 1, b: 2, c: 3 }));
console.log(count({}));

const [firstName, , title] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];
console.log(`${firstName} ${title}`);

function topSalary(salariesInput) {
  let topName = null;
  let topSal = 0;

  for (const [personName, salary] of Object.entries(salariesInput)) {
    if (salary > topSal) {
      topSal = salary;
      topName = personName;
    }
  }

  return topName;
}

console.log(topSalary({ John: 100, Pete: 300, Mary: 250 }));
console.log(topSalary({}));

const febDate = new Date(2012, 1, 20, 3, 12);
console.log(febDate);

function getWeekday(date) {
  const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  return days[date.getDay()];
}

console.log(getWeekday(new Date(2012, 0, 3)));

function getDateAgo(date, days) {
  const dateCopy = new Date(date);
  dateCopy.setDate(dateCopy.getDate() - days);
  return dateCopy.getDate();
}

const today = new Date(2015, 0, 2);
console.log(getDateAgo(today, 1));
console.log(getDateAgo(today, 2));
console.log(getDateAgo(today, 100));

function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

console.log(getLastDayOfMonth(2012, 0));
console.log(getLastDayOfMonth(2012, 1));

function getSecondsToday() {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((now - startOfDay) / 1000);
}

console.log(getSecondsToday());

function getSecondsToTomorrow() {
  const now = new Date();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return Math.round((tomorrow - now) / 1000);
}

console.log(getSecondsToTomorrow());

const jsonUser = {
  name: 'John Smith',
  age: 35,
};

const jsonStr = JSON.stringify(jsonUser);
console.log(jsonStr);

const restored = JSON.parse(jsonStr);
console.log(restored);
console.log(restored.name);

const room = {
  number: 23,
  toJSON() {
    return this.number;
  },
};

const meetup = {
  title: 'Conference',
  room,
};

console.log(JSON.stringify(meetup));
