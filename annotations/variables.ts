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
