function capitalizarPalabras(frase) {
    return frase
        .split(' ') 
        .map(palabra => {
         
            return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
        })
        .join(' '); 
}

console.log(capitalizarPalabras("javascript es divertido")); 
console.log(capitalizarPalabras("hola mundo")); 
console.log(capitalizarPalabras("código limpio es importante")); 
