/**
 * https://threejs.org
 * http://vaalentin.github.io/2015/
 */

let dropzone = document.querySelector("#dropzone")
let input = document.querySelector("input")


input.addEventListener("change",e=>{
    console.log("Agregaron un archivo a mano")
    manejarSubida(e.target.files)
})

dropzone.addEventListener("dragenter",e=>{
    e.preventDefault()
    console.log("Entraron al dropzone")
})

dropzone.addEventListener("dragleave",e=>{
    e.preventDefault()
    console.log("Salieron del dropzone")
})

dropzone.addEventListener("dragover",e=>{
    e.preventDefault()
    console.log("Encima del dropzone")
})

dropzone.addEventListener("drop",e=>{
    e.preventDefault()
    console.log("Me soltaron")
    manejarSubida(e.dataTransfer.files)
})

function manejarSubida(archivos){
    console.log(archivos)
    /**
     * URL.createObjectURL(Blob/File)
     * 
     * 1) Cada vez que me arrastren un archivo mostrarlo adentro del #dropzone junto con su nombre de archivo y su tamaño expresado en MB
     * 2) Ademas agregar un boton por fuera del dropzone que diga "cancelar"
     * 3) Agregarle un evento de click al boton que borre todo el contenido del dropzone y vuelva a mostrar el texto del label
     */
}

/**
 * 1) En el cliente que sea (github,gitlab, bitbucket) : crear un nuevo repositorio
 * 2) Entrar por la linea de comandos a la carpeta donde estan los archivos
 * 3) Ejecutar : 
 *  - git init
 *  - git config user.name "Horacio"
 *  - git config user.email "fake@mail.com"
 * 
 */