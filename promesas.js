const fs = require("fs/promises");    

async function leerArchivo() {
    try{
        const data = await fs.readFile('documento.txt', 'utf8');
        console.log('Contenido del archivo', data);  
    } catch (err) {
        console.log('Error lyendo el archivo', err);
    }
}

leerArchivo();
