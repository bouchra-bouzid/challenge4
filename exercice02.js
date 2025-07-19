/* Exercice 02 */

// On importe le module 'prompt-sync' pour pouvoir lire les entrées utilisateur dans le terminal
const prompt = require('prompt-sync')();

// On demande à l'utilisateur d'entrer un nombre et on le convertit en entier (parseInt)
let number = prompt("Entrez un nombre entre 2 et 9 : ");

// On vérifie si le nombre entré est bien compris entre 2 et 9 (inclus)
if (number >= 2 && number <= 9) {
  // Si la condition est vraie, on affiche la table de multiplication du nombre
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
} else {
  // Si le nombre n'est pas dans l'intervalle demandé, on affiche un message d'erreur
  console.log("Le nombre doit être entre 2 et 9.");
}
