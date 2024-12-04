/*
Crear un programa que permita al usuario agregar varias líneas de texto al archivo
hasta que decida detenerse escribiendo una palabra clave como SALIR.
*/

// const fs = require('fs')
// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// console.log(
//   'Ecribe líneas de texto para agregar al archivo. Escribe "SALIR" para terminar: '
// )

// function agregarTexto() {
//   rl.question('> ', (linea) => {
//     if (linea.trim().toUpperCase() === 'SALIR') {
//       console.log('Proceso terminado. Cotenido añadido al archivo')
//       rl.close()
//     } else {
//       fs.appendFile('archivo.txt', `\n${linea}`, (err) => {
//         if (err) {
//           console.log('Error agregando contenido al archivo', err)
//         }
//         agregarTexto()
//       })
//     }
//   })
// }

// agregarTexto()

/*
RETO:

Modifica el programa para mostrar al usuario el contenido actual 
del archivo antes que comience a escribir.
Permite que el usuario elija entre agregar texto o sobreescribir el archivo

*/

const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

fs.readFile('archivo.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('Error leyendo el archivo', err)
  } else {
    console.log(
      'Contenido actual del archivo: -------------------------------------'
    )
    console.log(data)
    console.log(
      '-----------------------------------------------------------------------'
    )
    console.log('¿Deseas sobreescribir el archivo? (s/n)')
    rl.question('> ', (respuesta) => {
      console.log('Escribe líneas de texto para agregar al archivo')
      console.log('Y para terminar el proceso, digite "SALIR" :')
      if (respuesta.trim().toLowerCase() === 's') {
        fs.writeFile('archivo.txt', '', (err) => {
          if (err) {
            console.log('Error sobreescribiendo el archivo', err)
          }
          agregarTexto()
        })
      } else {
        agregarTexto()
      }
    })
  }
})

function agregarTexto() {
  rl.question('> ', (linea) => {
    if (linea.trim().toUpperCase() === 'SALIR') {
      console.log('Proceso terminado. Cotenido añadido al archivo')
      rl.close()
    } else {
      fs.appendFile('archivo.txt', `\n${linea}`, (err) => {
        if (err) {
          console.log('Error agregando contenido al archivo', err)
        }
        agregarTexto()
      })
    }
  })
}
