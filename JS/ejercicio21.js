function reemplazarOcurrencias(cadena, palabra, nuevaPalabra) {
    return cadena.replaceAll(palabra, nuevaPalabra);
}

console.log(reemplazarOcurrencias("hola hola", "hola", "adiós")); 
console.log(reemplazarOcurrencias("JavaScript es genial", "genial", "increíble"));