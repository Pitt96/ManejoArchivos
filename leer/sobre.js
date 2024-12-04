const { error } = require('console');
const fs = require('fs');


fs.writeFile('archivo.txt', 'Hola Mundo', (err) => {
    if(err){
        console.log('Error escribiendo el archivo', err);
        return;
    }
    console.log('Archivo escrito con éxito.');
});