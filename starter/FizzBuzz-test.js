// 1. Saisie iMin iMax
// 2. iMin < iMax
// 3. pair ? -> impair
// 4. boucle
// 5. divisible par 3-9, 3 ou 9.

const sNumbers = prompt("Entrez 2 chiffres dont vous voulez l'itervalle au format x-y.");
const aMinMax = sNumbers.split("-");
let iMin = parseInt(aMinMax[0]);
const iMax = parseInt(aMinMax[1]);

if (iMin < iMax && iMin !== null && iMax !== null) {
    if (iMin%2 ===0 ) {
        iMin++;
    }
    console.log(`L'intervale sera [${iMin} - ${iMax}].`);
    for (let i = iMin ; i < iMax ; i += 2) {
        if (i %3 === 0 && i %9 === 0) {
            console.log(`${i} (FizzBuzz)`);
        } else if (i %3 === 0) {
            console.log(`${i} (Fizz)`);
        } else if (i %9 === 0) {
            console.log(`${i} (Buzz)`);
        } else {
            console.log(i);
        }
    }
}

/*
--- Version Bonus ---

const sNumbers = prompt("Entrez 2 chiffres dont vous voulez l'itervalle au format x-y.");
const aMinMax = sNumbers.split("-");
let iMin = parseInt(aMinMax[0]);
const iMax = parseInt(aMinMax[1]);

if (iMin < iMax && iMin !== null && iMax !== null) {
    if (iMin%2 ===0 ) {
        iMin++;
    }
    console.log(`L'intervale sera [${iMin} - ${iMax}].`);
    for (let i = iMin ; i < iMax ; i += 2) {
        if (i %3 === 0 && i %9 === 0) {
            console.log(`${i} (FizzBuzz)`);
        } else if (i %3 === 0) {
            console.log(`${i} (Fizz)`);
        } else if (i %9 === 0) {
            console.log(`${i} (Buzz)`);
        } else {
            console.log(i);
        }
    }
}
*/