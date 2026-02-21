function toFahrenheit(celsius) {
  let f = celsius * 9/5 + 32;
  return f.toFixed(2);
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
