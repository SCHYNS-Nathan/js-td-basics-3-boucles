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
EXEMPLE 3 : 
- Affichez les nombres pairs entre 0 et 20
*/
console.log("Voici les nombres pairs entre 0 et 20 :")
for (let iNombrePair = 0 ; iNombrePair <= 20 ; iNombrePair += 2) {
    console.log(iNombrePair);
}
console.log("C'est tout !")



