//Ejercicio 5 investigando los elementos
const input = document.querySelector('.input')
input.addEventListener('click', function(e) {
    e.value;
    console.dir(e);
});
//value: "hola", toma el valor que tiene el elemento en html
//nodeName: "INPUT", el nombre del elemento
//required false, representa cualquier elemento input, select, textarea