function contieneSoloNumeros(cadena) {
    return /^\d+$/.test(cadena); 
}

console.log(contieneSoloNumeros("12345")); 
console.log(contieneSoloNumeros("123a5")); 
console.log(contieneSoloNumeros("")); 
console.log(contieneSoloNumeros("0000")); 
