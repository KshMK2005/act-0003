function encontrarPalabraMasLarga(cadena) {
    const palabras = cadena.split(' '); 
    let palabraMasLarga = '';

    for (let palabra of palabras) {
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra; 
        }
    }

    return palabraMasLarga;
}

console.log(encontrarPalabraMasLarga("Aprender JavaScript es emocionante")); 
console.log(encontrarPalabraMasLarga("La programación es divertida")); 
console.log(encontrarPalabraMasLarga("Hola mundo"));
