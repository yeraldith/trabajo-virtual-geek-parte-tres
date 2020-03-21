//Ejercicio siete 
//declaración de arreglo
var contGeekGirls = [{
        //declaración de obeto
        nombre: 'María',
        edad: 29,
        profesion: 'Diseñadora'
    },
    {
        nombre: 'Lucía',
        edad: 31,
        profesion: 'Ingeniera Quimica'
    },
    {
        nombre: 'Susana',
        edad: 34,
        profesion: 'Periodista'
    },
    {
        nombre: 'Rocío',
        edad: 25,
        profesion: 'Actriz'
    },
    {
        nombre: 'Inmaculada',
        edad: 21,
        profesion: 'Diseñadora'
    }
];
//declaración de una función, que devuelve en número de obejtos de tiene el arreglo, para este caso muestra la cantidad de geek girls. (usando la propiedad length de los arreglos que permite contar el tamaño de este.)
function countGeekGirls(contGeekGirls) {
    console.log("En el grupo hay " + contGeekGirls.length + " Geek Girls");
};
countGeekGirls(this.contGeekGirls);
//declaración de valores que se van a usar para la siguiente fucion 
var acumulador = 0;
var media = 0;
//declaración de una función, que devuelve la media de las edades de las integrantes de geek girls, teniendo en cuenta que que la busqueda se debe realizar entrando al objeto. 
function averageAge(contGeekGirls) {
    for (let i = 0; i < contGeekGirls.length; i++) {
        acumulador += contGeekGirls[i].edad;
        media = acumulador / contGeekGirls.length;
    }
    return (media);
};
console.log("La media de edades de las integrantes del grupo es de: " + averageAge(contGeekGirls) +
    " años");


//Declaración de una función, que devuelve al nombre de la geek girl menor edad.() 
let nombredad = "";
let edad = 50;

function theYoungest(contGeekGirls) {
    for (let i = 0; i < contGeekGirls.length; i++) {
        if (contGeekGirls[i].edad < edad) {
            nombredad = contGeekGirls[i].nombre;
        }
    }
    return nombredad;
};
console.log("La geek chica más joven es: " + theYoungest(contGeekGirls));
theYoungest(this.contGeekGirls);


//Declaración de una función, que devuelve el número de geek girls que tienen con profesión diseñadoras.
const geekGirlsProfesion = contGeekGirls.filter(p => {
    return p.profesion === 'Diseñadora';
}, 0);
console.log(geekGirlsProfesion.length + " es el número de geek girl diseñadoras");