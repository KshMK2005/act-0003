function minusculas(letras){

    return letras.toLowerCase();
}

let texto =(prompt("Escribe en minuscula para convertirlo a mayuscula"));
let minus = minusculas(texto);
console.log(minus);