function contarPalabras(cadena) {
    let palabras = cadena.split(' '); 
    return palabras.length; 
}

console.log(contarPalabras("Aprender JavaScript es divertido")); 
console.log(contarPalabras("Hola mundo")); 
