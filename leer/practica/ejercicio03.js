/*
Crea un programa que genere un archivo nuevo cada vez que se ejecuta, usando la
fecha y hora actual como nombre del archivo.
*/

const { error } = require('console');
const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

const fileName = `archivo_${new Date().toISOString().replace(/[:.]/g, '-')}.txt`; //formato ISO 8601

rl.question('Escibre el texto que deseas guardar en el nuevo archivo: ', (texto) => {
    fs.writeFile(fileName, texto, (err) => {
        if(err){
            console.log('Error creando el archivo...', err);
        }else{
            console.log(`Archivo creado exitosamente: ${fileName}`);
        }
        rl.close();
    });
});


/*
RETO
Modifica el programa para que guarde los archivos en un subdirectorio llamado "nombre".  
*/
