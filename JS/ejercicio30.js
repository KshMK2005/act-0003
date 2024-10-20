function contarFrecuencia(cadena) {
    const frecuencia = {}; 
    
    for (const caracter of cadena) {
      
        if (frecuencia[caracter]) {
            frecuencia[caracter]++;
        } else {
        
            frecuencia[caracter] = 1;
        }
    }
    
    return frecuencia; 
}

console.log(contarFrecuencia("abbccc"));
console.log(contarFrecuencia("hello"));
console.log(contarFrecuencia("aabbccdd"));
console.log(contarFrecuencia("")); 
