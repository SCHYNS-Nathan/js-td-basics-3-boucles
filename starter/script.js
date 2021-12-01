let nombreA = 20;
let nombreB = 15;

let nomA = "Paul";
let nomB = "Sophie";

nombreA = 30;
nombreB = nombreA+10;


if (nombreA>nombreB) {
    console.log("A est plus grand que B.");
} else if (nombreA<nombreB) {
    console.log("A est plus petit que B.")
} else if (nombreA===nombreB) {
    console.log("A et B sont égaux.")
} else {
    console.log("???")
}

for (let i=0 ; i<nombreA ; i+=5) {
    console.log(`i vaut ${i} et est plus petit que A.`)
}


function bonjour(nom, age) {
    console.log(`Bonjour ${nom}, tu as ${age} ans.`);
    return age;
}
bonjour (nomA, nombreB);

bonjour2 = (nom) => {
    console.log(`Salut ${nom} ! Comment vas-tu ?`);
}
bonjour2("Bernard");

const tableau = [50, 22, 42, 38];
tableau[4] = 14;

const longueurTableau = tableau.length;
console.log(longueurTableau);

console.log(tableau[2]);

let tableau2 = [];
tableau2.push("Mario","Luigi","Bowser");
tableau2.pop();
tableau2.unshift("Peach");

console.log(tableau2);

