function truncarCadena(cadena, longitud) {
    if (cadena.length > longitud) {
        return cadena.slice(0, longitud) + "..."; 
    }
    return cadena; 
}

console.log(truncarCadena("JavaScript es genial", 10)); 
console.log(truncarCadena("Hola", 10)); 
console.log(truncarCadena("Este es un texto largo", 15)); 
