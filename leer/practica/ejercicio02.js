/*
Hacer que el programa lea y muestre el contenido actual del archivo antes
de agregar el texto nuevo.
*/

// const fs = require('fs')
// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// function leerAgregar() {
//   fs.readFile('archivo.txt', 'utf8', (err, data) => {
//     if (err) {
//       console.log('Error leyendo el archivo.', err)
//     } else {
//       console.log('Cotenido actual del archivo')
//       console.log(data || '(El archivo se encuentra vacío)')
//     }
//     rl.question(
//       'Escribe el texto que deseas agregar al archivo actual: ',
//       (textoAdicional) => {
//         fs.appendFile('archivo.txt', `\n${textoAdicional}`, (err) => {
//           if (err) {
//             console.log('Error agregando contenido al archivo', err)
//           } else {
//             console.log('Cotenido agregado exitosamente!!!.')
//           }
//           rl.close()
//         })
//       }
//     )
//   })
// }

// leerAgregar()

/*
RETO:
Agregar un menú para que el usuario elija entre leer el archivo, agregar texo o 
salir del programa.

Hacer que el programa maneje errores si el archivo no existe y ofrezca la opción de 
crearlo.
*/

const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function leerArchivo() {
  console.log('---------------------------------------------------------------')
  fs.readFile('archivo.txt', 'utf8', (err, data) => {
    if (err) {
      console.log('Error leyendo el archivo.', err)
      rl.question('¿Deseas crear el archivo? (s/n): ', (respuesta) => {
        if (respuesta.toLowerCase() === 's') {
          fs.writeFile('archivo.txt', '', (err) => {
            if (err) {
              console.log('Error creando el archivo.', err)
            } else {
              console.log('Archivo creado exitosamente!!!')
              leerArchivo()
            }
          })
        } else {
          menu()
        }
      })
    } else {
      console.log('Contenido actual del archivo:')
      console.log(data || '(El archivo se encuentra vacío)')
      console.log(
        '---------------------------------------------------------------'
      )
      menu()
    }
  })
}

function agregarTexto() {
  console.log('---------------------------------------------------------------')
  rl.question(
    `Escribe el texto que deseas agregar al archivo actual: \n>`,
    (textoAdicional) => {
      fs.appendFile('archivo.txt', `\n${textoAdicional}`, (err) => {
        if (err) {
          console.log('Error agregando contenido al archivo', err)
        } else {
          console.log('Contenido agregado exitosamente!!!')
        }
        console.log(
          '---------------------------------------------------------------'
        )
        menu()
      })
    }
  )
}

function menu() {
  rl.question(
    'Selecciona una opción:\n\t1) Leer archivo\n\t2) Agregar texto\n\t3) Salir\n>',
    (opcion) => {
      switch (opcion) {
        case '1':
          leerArchivo()
          break
        case '2':
          agregarTexto()
          break
        case '3':
          console.log('Saliendo del programa')
          rl.close()
          break
        default:
          console.log('Opción no válida')
          menu()
          break
      }
    }
  )
}

menu()
