function convertirASnakeCase(frase) {
    return frase
        .toLowerCase() 
        .replace(/\s+/g, '_'); 
}

console.log(convertirASnakeCase("Hola Mundo")); 
console.log(convertirASnakeCase("Convertir a Snake Case")); 
console.log(convertirASnakeCase("Ejemplo de cadena"));
