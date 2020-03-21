//Ejercicio cinco la media 

var number = [2, 4, 6, 8, 10];
let acumulador = 0;
let media = 0;

function averague(number) {
    for (let i = 0; i < number.length; i++) {
        acumulador += number[i];
        media = acumulador / number.length;
    }
    return (media);
}
console.log("la media de el arreglo es de: " + averague([2, 4, 6, 8, 10]));