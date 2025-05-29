'use strict'
function logger(){
    console.log("Sup man")
}

logger();

function fruitProcessor(banana, orange){
    const juice = `We made this juice with ${banana} and ${orange}`;
    return juice;
}

const FruitJuice = fruitProcessor(4,5)
console.log(fruitProcessor(5,4))

const yearsUntilRetirement = (birthyear, firstName) => {
const age = 2025 - birthyear;
const retirement = 65 - age;
return `You have ${age} years left to retirement ${firstName}`;

}

console.log(yearsUntilRetirement(2000, 'Rita'))
