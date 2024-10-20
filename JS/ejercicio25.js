function removerCaracteresEspeciales(cadena) {
    return cadena.replace(/[^a-zA-Z0-9]/g, ''); 
}

console.log(removerCaracteresEspeciales("Hola@mundo!")); 
console.log(removerCaracteresEspeciales("¡Hola, mundo! 123")); 
console.log(removerCaracteresEspeciales("#JavaScript$%&")); 
