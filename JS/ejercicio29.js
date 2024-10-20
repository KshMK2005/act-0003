function eliminarLetrasRepetidas(cadena) {
    let resultado = '';
    
    for (let i = 0; i < cadena.length; i++) {
        
        if (cadena[i] !== cadena[i - 1]) {
            resultado += cadena[i];
        }
    }
    
    return resultado;
}

console.log(eliminarLetrasRepetidas("aabbccdde")); // 
console.log(eliminarLetrasRepetidas("yyyyyyooooooo")); 
console.log(eliminarLetrasRepetidas("abba")); 
console.log(eliminarLetrasRepetidas("")); 
