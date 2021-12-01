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
EXEMPLE 3 : 
- Affichez les nombres pairs entre 0 et 20
*/
let iNombrePair = 0 ;
console.log("Voici les nombres pairs entre 0 et 20 :")
while (iNombrePair <= 20) {
    console.log(iNombrePair);
    iNombrePair += 2;
}
console.log("C'est tout !")
