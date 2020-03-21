//Ejercicio 3 Bio de Geek Girls2 añade un metodo que muestre una ventana de alerta 

const geekGirl1 = {};
geekGirl1.name = 'María';
geekGirl1.age = 34;
geekGirl1.profesion = 'Periodista'
geekGirl1.sayHello = function() {
    return 'Hola, me llamo ' + this.name;
}
geekGirl1.showBio = function() {
    return (', tengo ' + this.age + ' años y soy ' + this.profesion);
}

// Muestra en la consola 'Hola, me llamo María'
console.log(geekGirl1.sayHello() + geekGirl1.showBio());
//Muestra en la consola 'Hola, me llamo María, tengo 34 años y spy periodista'


const geekGirl2 = {};
geekGirl2.name2 = 'Rocio';
geekGirl2.age2 = 28;
geekGirl2.profesion2 = 'Actriz'
geekGirl2.Hello = function() {
        return ('Hola mi nombre es ' + this.name2 + ' tengo ' + this.age2 + ' años y amo ser ' + this.profesion2);
    }
    //Muestra en la consola 'Hola, me llamo Rocio, tengo 28 años y amo der actriz'
console.log(geekGirl2.Hello());