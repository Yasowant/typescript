const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (x: number, y: number): number => {
  return x - y;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string) => {
  if (!message) {
    throw new Error(message);
  }
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logweather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
logweather(forecast);

//Destructuring with annotations

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
