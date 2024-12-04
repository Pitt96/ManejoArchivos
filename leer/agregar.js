const fs = require('fs');

fs.appendFile('archivo.txt', '\nCETI', (err) => {
    if (err){
        console.log('Error agregado contenido al archivo.', err);
        return;
    }
    console.log('Contenido añadido exitosamente!!!');
});