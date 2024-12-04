/*
Hacer que el programa lea y muestre el contenido actual del archivo antes
de agregar el texto nuevo.
*/

const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

function leerAgregar() {
    fs.readFile('archivo.txt', 'utf8', (err, data) => {
        if(err){
            console.log('Error leyendo el archivo.', err);
        }else{
            console.log('Cotenido actual del archivo');
            console.log(data || '(El archivo se encuentra vacío)');
        }
        rl.question('Escribe el texto que deseas agregar al archivo actual: ', (textoAdicional) => {
            fs.appendFile('archivo.txt',  `\n${textoAdicional}`, (err) => {
                if (err) {
                    console.log('Error agregando contenido al archivo', err);
                }else{
                    console.log('Cotenido agregado exitosamente!!!.');
                }
                rl.close();
            });
        });
    });
}

leerAgregar();

/*
RETO:
Agregar un menú para que el usuario elija entre leer el archivo, agregar texo o 
salir del programa.

Hacer que el programa maneje errores si el archivo no existe y ofrezca la opción de 
crearlo.
*/