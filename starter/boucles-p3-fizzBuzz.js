/*
BOUCLES - PRÉPA 3 : FizzBuzz
Ecrivez un programme qui affiche tous les nombres entre 1 et 100 avec les exceptions suivantes :
- Il affiche "Fizz" à la place du nombre si celui-ci est divisible par 3 ;
- Il affiche "Buzz" à la place du nombre si celui-ci est divisible par 5 et non par 3 ;
- Il affiche "FizzBuzz" à la place du nombre si celui-ci est divisible à la fois par 3 et par 5.
*/

/*
RAPPELS - AIDES :
- Vous aurez besoin pour réaliser cet exercice des deux structures de contrôle que nous avons vues :
	les tests et les boucles.
- Vous aurez aussi besoin de l'opérateur modulo %
	qui renvoie le reste de la division d'un entier par un autre.
- TIP : Cet exercice constitue un test d'embauche classique qui élimine un nombre significatif de candidats.
	Accrochez-vous pour le réussir !
*/
for (let iAllNumber = 0 ; iAllNumber <= 100 ; iAllNumber++) {
    if (iAllNumber % 3 === 0 && iAllNumber % 5 === 0) {
        console.log(`${iAllNumber} (FizzBuzz)`);
    }
    else if (iAllNumber % 3 === 0) {
        console.log(`${iAllNumber} (Fizz)`);
    }
    else if (iAllNumber % 5 === 0) {
        console.log(`${iAllNumber} (Buzz)`);
    }
    else {
        console.log(iAllNumber);
    }
}
