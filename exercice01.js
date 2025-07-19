/* Exercice 01 */

// On importe le module 'prompt-sync' pour pouvoir lire les entrées de l'utilisateur dans le terminal
const prompt = require('prompt-sync')();

// On demande à l'utilisateur de saisir un prix brut 
let prix = prompt("Entrez le prix brut : ");

// On calcule le prix final en ajoutant la TVA (18.5%)
let tva = 18.5;
let final = prix * (1+ (tva/100));

// Affichage du résultat arrondi à 2 chiffres après la virgule
console.log(`Prix final avec TVA (${tva}%) :`, final.toFixed(2));
