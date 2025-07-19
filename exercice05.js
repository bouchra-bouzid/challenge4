/* Exercice 05 */

function reverseString(str) {
  // .split("") transforme la chaîne en tableau de caractères
  // .reverse() inverse l’ordre des éléments dans le tableau
  // .join("") retransforme le tableau en chaîne
  return str.split("").reverse().join("");
}

// On importe le module 'prompt-sync' pour lire l'entrée utilisateur dans le terminal
const prompt = require('prompt-sync')();

// On demande à l'utilisateur d'entrer une chaîne de caractères
let text = prompt("Entrez une chaîne : ");

// On affiche la chaîne inversée en appelant la fonction reverseString
console.log("Chaîne inversée :", reverseString(text));
