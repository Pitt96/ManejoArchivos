
const fs = require('fs');

fs.rename('archivoviejito.txt', 'archivonuevo.txt', (err) => {
    if (err) {
        console.log('Error al renombrar el archivo', err);
        return;
    }
    console.log('Archivo renombrado');
});