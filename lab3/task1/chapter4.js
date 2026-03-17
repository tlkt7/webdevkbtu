'use strict';

const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

console.log(user);

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmpty({}));
console.log(isEmpty(user));

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let totalSalary = 0;
for (const salary of Object.values(salaries)) {
  totalSalary += salary;
}
console.log(totalSalary);

function multiplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

const menu = { width: 200, height: 300, title: 'My menu' };
multiplyNumeric(menu);
console.log(menu);

const originalUser = { name: 'Alice', age: 25 };
const clonedUser = Object.assign({}, originalUser);
clonedUser.name = 'Bob';

console.log(originalUser.name);
console.log(clonedUser.name);

const userWithAddress = {
  name: 'Alice',
  address: { city: 'Almaty' },
};
const deepClone = structuredClone(userWithAddress);
deepClone.address.city = 'Astana';

console.log(userWithAddress.address.city);
console.log(deepClone.address.city);

const calculator = {
  a: 0,
  b: 0,

  read(x, y) {
    this.a = x;
    this.b = y;
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read(2, 3);
console.log(calculator.sum());
console.log(calculator.mul());

const ladder = {
  step: 0,

  up() {
    this.step++;
    return this;
  },

  down() {
    this.step--;
    return this;
  },

  showStep() {
    console.log(this.step);
    return this;
  },
};

ladder.up().up().up().down().showStep();

function Calculator() {
  this.read = function (x, y) {
    this.a = x;
    this.b = y;
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

const calc = new Calculator();
calc.read(5, 6);
console.log(calc.sum());
console.log(calc.mul());

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function (x) {
    this.value += x;
  };
}

const accumulator = new Accumulator(1);
accumulator.read(2);
accumulator.read(3);
console.log(accumulator.value);

const idA = Symbol('id');
const idB = Symbol('id');
console.log(idA === idB);

const userPrimitive = {
  name: 'John',
  money: 1000,

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this.money;
    if (hint === 'string') return this.name;
    return this.money;
  },
};

console.log(`${userPrimitive}`);
console.log(+userPrimitive);
console.log(userPrimitive + 500);
