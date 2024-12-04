const fs = require('fs');

//leer archivo binario
fs.readFileSync('archivo.pdf', (err, data) => {
    if (err) throw err;
    console.log('Archivo leído como Buffer: ', data);

    fs.writeFile('copia.pdf', data, (err) => {
        if(err) throw err;
        console.log('Copia creada exitosamente');
    });
});