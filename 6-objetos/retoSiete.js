//Ejercicio 7 estructura de datos para usuario
const job = 'developer';
const persona = {}
persona.firstname = 'Yeraldith';
persona.lastname = 'Camargo';
persona.age = 28;
persona.job = job;
persona.aumentarAge = () => {
    this.age++;
    return this.age;
}

//Mostrar en consola
console.log(persona.firstname);
console.log(persona.lastname);
console.log(persona.age);
console.log(persona.job);

persona.firstname = 'Ximena';
console.log(persona.firstname);
console.log(persona.aumentarAge());