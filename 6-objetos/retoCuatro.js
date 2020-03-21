//Investigando event, preparar un boton para logear el objeto event en la consola.

const button = document.querySelector('.button');

button.addEventListener('click', function(e) {
    console.log('hola', (e));
});


//Cuando se logea el objeto en type, tenemos el evento que desplego un type,'CLICK', esta es una propiedad que se desplego del evento