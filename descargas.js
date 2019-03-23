let progress = document.querySelector("progress")
let youtube = document.querySelector("#youtube-loader")

let xhr = new XMLHttpRequest
xhr.open("GET","imagen.jpg")
//XHR.responseType = Sirve para decirle a un objeto XHR en que formato queremos decodificar la respuesta
xhr.responseType = "blob"

xhr.addEventListener("readystatechange",()=>{
    if (xhr.readyState == 2) {
        progress.classList.toggle("hidden")
    }
})

xhr.addEventListener("progress",e=>{
    if (e.lengthComputable) {
        let porcentaje = e.loaded / e.total * 100
        progress.value = porcentaje   
        youtube.style.width = porcentaje+"%"
    }else{
        //No puedo calcular cuanto va a demorar la descarga
    }
})
xhr.addEventListener("load",()=>{
    console.log("Termino la descarga")
    progress.classList.toggle("hidden")
    youtube.style.width = ""
    //ArrayBuffer - Blob - File - MediaStream - MediaSource : Son APIs que sirven para decodificar distintas fuentes binarias
    
    //URL : Nos permite extraer una URL temporal de un Blob o un File o un MediaStream
    let url = URL.createObjectURL(xhr.response)
    
    /*
    let img = document.createElement("img")
    img.src = url
    document.body.appendChild(img)
    */
    let a = document.createElement("a")
    a.href = url
    //a.target = "_blank"
    a.download = "minuevaimagen"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
})
xhr.send()

/**
 * Elemento.classList.add("") : Agrega una clase
 * Elemento.classList.remove("") : remueve una clase
 * Elemento.classList.toggle("") : Activa o desactiva una clase dependiendo su estado actual
 * 
 */