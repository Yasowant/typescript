const carMakers: string[] = ['ford', 'BMW', 'audi'];
const dates: Date[] = [new Date(), new Date()];
const carsByMake = [['F150'], ['corolla']];

const carsByMake2d: string[][] = [];

//Help with inference when extracting values
const car = carMakers[0];
console.log(car, 'car');
const myCar = carMakers.pop();
console.log(carMakers, 'myCar');

//prevent incompatible values
//carMakers.push(100)---error
//because the array contains only string data type but i want to add number so error comes

//Help with map
carMakers.map((car: string): string => {
  return car;
});

//Flexible types
const importantDates = [new Date(), '2030-10-10'];
const importantDatess: (Date | string)[] = [new Date()];

importantDatess.push('2024-09-12');
importantDatess.push(new Date());
console.log('importantDatess', importantDatess);
