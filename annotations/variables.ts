let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//Built in Objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 1.3, 0.23];
let truths: boolean[] = [true, false, true];

//classes
class Car {}
let car: Car = new Car();

//object literal
let point: { x: number; y: number } = {
  x: 25,
  y: 67,
};
console.log(point);

//functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//1.Function that returns the 'any' type
const json = '{"x":10,"y":34}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//2.when we declare a variable on one line and initalize it later
let words = ['red', 'green', 'blue'];
let findword = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    findword = true;
  }
}

//3.Variable which type can not be inferred
let numbers = [-10, -2, 9];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
