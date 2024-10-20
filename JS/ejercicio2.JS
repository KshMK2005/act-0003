function mayusculas(letras){

    return letras.toUpperCase();
}

let texto =(prompt("Escribe en minuscula para convertirlo a mayuscula"));
let mayus = mayusculas(texto);
console.log(mayus);