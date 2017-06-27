//zadanie 1

function buildString(...template){
    return `I like ${template.join(', ')}!`;
}

console.log(buildString('chockolate'));
console.log(buildString('chockolate', 'milk'));
console.log(buildString('chockolate', 'milk' , 'kaffe');
