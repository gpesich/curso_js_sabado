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
    //console.log(archivos)
    //FormData = Recoleta informacion de un formulario y la formatea lista para ser enviada. Si no tenes formularios, podes crear uno vacio y agregarle dinamicamente informacion

    //Creamos un formdata vacio
    let data = new FormData
    //Iteramos sobre todos los elementos que queremos agregar al formdata
    for (let i = 0; i < archivos.length; i++) {
        const archivo = archivos[i];
        //por cada elemento que quiero agregar, se lo agrego con el metodo append
        data.append(archivo.name,archivo)
    }

    let xhr = new XMLHttpRequest
    xhr.open("POST","archivos.php")
    //xhr.setRequestHeader("content-type","multipart/form-data")
    xhr.upload.addEventListener("progress",e=>{
        if (e.lengthComputable) {
            
            let porcentaje_subida = e.loaded / e.total * 100
            console.log(porcentaje_subida)

        }else{
            //No puedo saber cuanto va a tardar la subida
        }
    })
    //Los parametros en un POST viajan en el send
    xhr.send(data)

    /**
     * URL.createObjectURL(Blob/File)
     * 
     * 
     * QUEDA PARA CLASE QUE VIENE
     * 
     * 1) Cada vez que me arrastren un archivo mostrarlo adentro del #dropzone junto con su nombre de archivo y su tamaño expresado en MB
     * 2) Ademas agregar un boton por fuera del dropzone que diga "cancelar"
     * 3) Agregarle un evento de click al boton que borre todo el contenido del dropzone y vuelva a mostrar el texto del label
     * 4) Agregar un boton que diga "aceptar" y que tenga un evento de click que suba TODOS los archivos por AJAX
     * 5) Cada preview de archivo tiene que tener su propio boton de aceptar y cancelar
     */
}

/**
 * 1) En el cliente que sea (github,gitlab, bitbucket) : crear un nuevo repositorio
 * 2) Entrar por la linea de comandos a la carpeta donde estan los archivos
 * 3) Ejecutar : 
 * 
 * 
 * 
 *  - git init
 *      (Este comando crea un repositorio en tu maquina)
 * 
 * 
 * 
 *  - git config user.name "Horacio"
 *  - git config user.email "fake@mail.com"
 * 
 * (Estos dos comandos son obligatorios y son para configurar GIT)
 * 
 * 
 * 
 *  - git add . 
 * 
 * (Este comando agrega todos los archivos de tu carpeta al repositorio que acabamos de crear)
 * 
 * 
 * 
 *  - git commit -m "Agregando archivos de la clase del sabado"
 * 
 * (Este comando confirma que queriamos agregar esos archivos y nos permite dejar un mensaje)
 * 
 * 
 * 
 *  - git remote add <alias> <https://github.com/<nombreDeUsuario>/<nombreDelRepositorio>.git
 * 
 * (Este comando establece la conexion entre nuestro repo local y el de la nube)
 * 
 * 
 * https://github.com/HoracioGutierrez/curso_js_sabado
 * 
 */