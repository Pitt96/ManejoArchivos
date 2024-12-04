const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs');

async function crearPDF() {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    page.drawText('Hola, este es un archivo PDF', {
        x: 50,
        y: 350,
        size: 30,
        color: rgb(0, 0.53, 0.71),
    });

    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync('archivo.pdf', pdfBytes);
    console.log('Archivo PDF creado');
}

crearPDF();
    