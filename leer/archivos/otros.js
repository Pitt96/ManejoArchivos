const { Document, Packer, Paragraph } = require('docx');
const fs = require('fs');

const doc = new Document({
    sections: [
        {
            children: [new Paragraph('Hola, este es un archivo Word')],
        },
    ],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync('archivo.docx', buffer);
    console.log('Archivo Word creado');
});
