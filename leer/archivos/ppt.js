const PptxGenJS = require('pptxgenjs');

let pptx = new PptxGenJS();
pptx.addSlide().addText('Hola, este es un archivo PPTX');
pptx.writeFile('archivo.pptx').then(() => {
    console.log('Archivo PPTX creado');
});
