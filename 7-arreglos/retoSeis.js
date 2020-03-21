//Ejercicio seis
var arrFavorito = [];
const input = document.getElementById('input1');
const input2 = document.getElementById('input2');
const button = document.getElementById('btn');
const msj = document.getElementById('msj');
button.addEventListener('click', (e) => {
    e.preventDefault();
    arrFavorito[0] = input.value;
    arrFavorito[1] = input2.value;
    for (const cant of arrFavorito) {
        msj.innerHTML += `¡A mí también me encantó ${cant}<br>`;
    }
});