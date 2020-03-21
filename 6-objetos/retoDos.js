//Ejercicio dos a la carrera añadir un método que muestre en la consola estoy corriendo


//Crear objeto
const geekGirl = {};
geekGirl.name = 'María';
geekGirl.distancekm = 50;
//funcion dentro de objeto
geekGirl.speak = (phrase) => `Yo digo: ${phrase}`;
geekGirl.run = (mostar) => `Estoy corriendo ${mostrar}`;
geekGirl.runAmarathon = (distance) => `Estoy corriendo un maratón de ${distance} Kilometros`;

// Muestra en la consola 'Yo digo: Hola'
console.log(geekGirl.speak('Hola'));

//muestra en la consola 'Estoy corriendo un maratón de 50 Kilometros
console.log(geekGirl.runAmarathon(50));