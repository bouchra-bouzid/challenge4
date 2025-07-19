/* Exercice 04 */

const prompt = require('prompt-sync')();

// Fonction de conversion de Fahrenheit au Celsius
function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}

// Conversion Celsius au Fahrenheit
let celsius = parseFloat(prompt("Entrez la température en °C : "));
let fahrenheit = (celsius * 9 / 5) + 32;
console.log(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);

// Conversion Fahrenheit au Celsius 
let f = parseFloat(prompt("Entrez la température en °F : "));
let c = fahrenheitToCelsius(f);
console.log(`${f}°F = ${c.toFixed(2)}°C`);
