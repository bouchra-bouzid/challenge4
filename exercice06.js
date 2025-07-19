/* Exercice 06 */

function countVowels(str) {
  let count = 0;

  // Chaîne contenant toutes les voyelles, en minuscules et majuscules
  let vowels = "aeiouyAEIOUY";

  // On parcourt chaque caractère de la chaîne donnée
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// On importe le module 'prompt-sync' pour lire l'entrée utilisateur dans le terminal
const prompt = require('prompt-sync')();

// On demande à l'utilisateur d'entrer une chaîne de caractères
let input = prompt("Entrez une chaîne : ");

// On appelle la fonction et on affiche le nombre de voyelles dans la chaîne entrée
console.log("Nombre de voyelles :", countVowels(input));
