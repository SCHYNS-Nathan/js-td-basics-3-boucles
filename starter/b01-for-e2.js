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
console.log("Le manège démarre !");
for (iTour = 1; iTour <=10 ; iTour++ ) {
    console.log(`C'est le tour n°${iTour}.`)
}
console.log("Le manège s'arrête...");

