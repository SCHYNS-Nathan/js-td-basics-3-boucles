/*****************************
* BOUCLES ET ITÉRATIONS
* BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
*/

/* 6.1. Boucle FOR
  Syntaxe :
    for (initialisation; condition; étape) {
        // instructions exécutées tant que la condition est vérifiée
    }
  Ingrédients :
    - initialisation : on initialise un compteur pour dire OÙ ON COMMENCE
    - condition : on écrit une condition sur le compteur pour dire QUAND ON S'ARRÊTE
    - étape : on incrémente le compteur pour dire COMMENT ON AVANCE dans la boucle
*/

/* EXEMPLE 4 :
- Affichez les 10 premières valeurs de la table de multiplication choisie par l'utilisateur
  1. Demandez à l'utilisateur de choisir la table de multiplication qu'il souhaite afficher :
    "Je voudrais afficher les 10 premières valeurs de la table de multiplication par"
  2. Affichez le résultat avec :
    - un titre : "Voici les 10 premières valeurs de la table de multiplication par …"
    - pour chaque valeur, le calcul et le résultat (par exemple : 1 * 7 = 7)
  3. Tentez d'afficher la valeur de i après être sorti de la boucle…
    - que se passe-t-il si vous avez déclaré i avec let ?
    - que se passe-t-il si vous déclarez i avec var ?
*/
let iChoixTable = prompt("Je voudrais afficher les 10 premières valeurs de la table de multiplication par... ?");
for (let iMultiplication = 1 ; iMultiplication <= 10 ; iMultiplication++) {
    console.log(parseInt(iChoixTable)*iMultiplication);
}
