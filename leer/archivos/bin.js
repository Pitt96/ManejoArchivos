const fs = require('fs');

// Leer archivo binario
fs.readFile('archivo.pdf', (err, data) => {
    if (err) throw err;
    console.log('Archivo leído como Buffer:', data);

    // Escribir una copia del archivo
    fs.writeFile('copia.pdf', data, (err) => {
        if (err) throw err;
        console.log('Copia creada');
    });
});
