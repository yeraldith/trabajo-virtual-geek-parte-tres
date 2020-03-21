//ejercicio 9 crea un árbol de navidad

let altura = 0;
acum = '';
altura = parseInt(prompt("Indique la altura del árbol"));
for (let i = 0; i < altura; i++) {
    acum += '▲';
    console.log('' + acum);
}