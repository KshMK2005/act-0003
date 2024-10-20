function esPalindromo(palabra) {
    
    palabra = palabra.toLowerCase();
    
   
    let palabraInvertida = palabra.split('').reverse().join('');
    
    return palabra === palabraInvertida;
}

console.log(esPalindromo("Antonio")); 
console.log(esPalindromo("Oso"));
