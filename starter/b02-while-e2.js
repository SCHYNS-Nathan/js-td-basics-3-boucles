/*****************************
* 6. BOUCLES ET ITÉRATIONS
* BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
*/

/* 6.2. Boucle WHILE
  La boucle `while` permet de répéter des instructions tant qu'une condition est vérifiée.
  Syntaxe :
    while (condition) {
      // instructions exécutées tant que la condition est vérifiée
    }
*/

/*
EXEMPLE 2 : 
- Complétez ce programme pour qu'il fasse 10 tours de manège
  en affichant le numéro du tour à chaque tour.
- Vous devez afficher dans la console les phrases suivantes :
  - Le manège démarre
  - C'est le tour numéro 1
  - C'est le tour numéro 2
    ...
  - C'est le tour numéro 10
  - Le manège s'arrête
*/
let iTour = 1;
console.log("Le manège démarre !");
while (iTour <= 10) {
    console.log(`C'est le tour n°${iTour}.`);
    iTour++;
}
console.log("Le manège s'arrête...");

