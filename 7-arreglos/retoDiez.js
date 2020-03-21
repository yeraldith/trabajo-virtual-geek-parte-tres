//Ejercicio 10 ponerle una estrella al árbol
let altura = 0;
let acum = '';
let tronco = '|';
let copa = '+';
altura = parseInt(prompt("Indique la altura del árbol"));
console.log(copa);
for (let i = 0; i < altura; i++) {
    acum += '▲';
    console.log('' + acum);
}
console.log(tronco);