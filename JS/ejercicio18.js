function eliminarVocales(cadena) {
    return cadena.replace(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g, '');
}

console.log(eliminarVocales("javascript")); 
console.log(eliminarVocales("Hola Mundo")); 
console.log(eliminarVocales("Aprender es divertido")); 
