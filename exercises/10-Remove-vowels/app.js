// Your code goes here
const rapid = (str) => {

    const vocales = /[aeiouáéíóúü]/gi;
    let resultado = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        if (!vocales.test(char)) {
            resultado += char.toUpperCase();
        }
    }
    return resultado;
}

// const rapid=text=>text.replaceAll(/[aeiou]/,"").toUpperCase() 
// Work above this line; do not change code below
let str = "John"
console.log(rapid(str));
