// Your code goes here
const rapid = (str) => {

    const vocales = /[aeiouáéíóúü]/gi;
    let resultado = '';

    // Bucle for para recorrer cada carácter del string
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        // Si no es una vocal, lo añade al resultado en mayúsculas
        if (!vocales.test(char)) {
            resultado += char.toUpperCase();
        }
    }
    return resultado;
}

// Work above this line; do not change code below
let str = "John"
console.log(rapid(str));
