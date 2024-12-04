const fs = require('fs').promises;


fs.readFile('documento.txt', 'utf8')
    .then(data => {
        console.log('Contenido del archivo. ', data);
    })
    .catch(err => {
        console.error('Error leyendo el archivo.', data);
    });