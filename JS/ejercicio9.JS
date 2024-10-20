function Letra(cadena) {
    if (!cadena) return ""; 
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);//slice desliza y muestra la cadena despues eneste caso de la J de JAVASCRIPT 
}

console.log(Letra("javascript")); 
