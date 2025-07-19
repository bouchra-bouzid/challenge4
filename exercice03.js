/* Exercice 03 */

const values = [3, 11, 7, 2, 9, 10];

// Calculer la somme
let sum = 0;
for (let value of values) {
  sum += value;
}
console.log("Sum of values:", sum);

// Fonction pour calculer la moyenne
function calculateAverage(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total / arr.length;
}

console.log("Average:", calculateAverage(values));

// Fonction pour avoir le MAX et le MIN
function getMinMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
  }

  return { min, max };
}

const result = getMinMax(values);
console.log("Minimum:", result.min);
console.log("Maximum:", result.max);
