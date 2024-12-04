/*
fs.readFile:

- La ruta del archivo

- utf8
- Collback
*/

const fs = require('fs');

//Leer un archivo de manera asincrónica
fs.readFile('documento.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error leyendo el archivo', err);
        return;
    }
    console.log('Contenido del archivo.', data);
});