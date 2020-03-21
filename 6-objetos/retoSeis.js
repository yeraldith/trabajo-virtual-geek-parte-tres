//Ejercicio Seis crear un tontador
//valor máximo
//valor mínimo
//valor actual
//valor inicial

//declarar objeto
var Contador = {
    valorinicial: 6,
    valormaximo: 10,
    valoractual: 1,
    valorminimo: 1,

    //fucion dentro de objeto
    aumentarvalor() {
        if (this.valoractual < this.valormaximo) {
            this.valoractual++;
        }
    },
    disminuirvalor() {
        if (this.valoractual > this.valorminimo) {
            this.valoractual--;
        }
    },
    restablecer() {
        this.valoractual = this.valorinicial;
    },
    cambiarvalormaximo(valormaximo) {
        this.valormaximo = valormaximo;
    }
};

//pruebas de consola
Contador.cambiarvalormaximo(20);
console.log(Contador.valoractual);
Contador.aumentarvalor();
console.log(Contador.valoractual);
Contador.disminuirvalor();
console.log(Contador.valoractual);
Contador.restablecer();
console.log(Contador.valoractual);
Contador.aumentarvalor();
Contador.aumentarvalor();
Contador.aumentarvalor();
Contador.aumentarvalor();
Contador.aumentarvalor();
Contador.aumentarvalor();
Contador.aumentarvalor();
Contador.aumentarvalor();
console.log(Contador.valoractual);




//metodos
//aumentar
//disminuir
//restablecer