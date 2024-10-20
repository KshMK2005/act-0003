function palabrauno(si, palabra){
    return si.includes(palabra);

}

let texto=prompt("La palabra es GENIAL");
let palabra ="GENIAL";
console.log(palabrauno(texto, palabra));