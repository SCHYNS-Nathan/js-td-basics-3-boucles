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
EXEMPLE 1 :
- Affichez les nombres de 1 à 10
  - 1°) sans utiliser de boucle : écrivez toutes les instructions à la main, une par une
  - 2°) en utilisant la boucle FOR
- Écrivez la table d'évolution des variables
*/
for (let iNombre = 1 ; iNombre <= 10 ; iNombre++ ) {
    console.log(iNombre);
}

/*
N.B. TABLE D'ÉVOLUTION DES VARIABLES :
  nbre      nbre < =10           console.log(nbre)        nbre++
nbre = 1,   1 < 5 true,           affiche 1,          nbre passe à 1+1 = 2
nbre = 2,   2 < 5 true,           affiche 2,          nbre passe à 2+1 = 3
...
nbre = 10,  10 <= 10 true,        affiche 2,          nbre passe à 10+1 = 11
nbre = 11,  11 <= 10 FALSE,       on sort de la boucle !
*/

