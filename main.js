
/*
definisco un oggetto che mi vada a dire a cosa voglio accedere con la pagina web
*/
let constraintObj = {
    audio: true, //accedo all'audio
    video: {    //accedo al video con delle specifiche grandezze
        facinMode: "user",
        with: { min: 640, ideal: 1280, max: 1920 },
        height: { min: 480, ideal: 720, max: 1080 }
    }
}

/*
Vado a chiedere l'autorizzazione al cliente se posso avere accesso al video e all'audio e se mi da l'accesso allora vado ad eseguire la mia funzione
*/
navigator.mediaDevices.getUserMedia(constraintObj).then(function (mediaStreamObj) {

    /*
    con video vado a selezionare l'elemento dove poi andro a far vedere quello che vede la videocamera
    */
    let video = document.querySelector("video");

    /*
    se video e un dato sorgente allora vado ad iniziare lo stream e lo riproduco all'interno del contenitore video che ho in html
    */
    if ("srcObject" in video) {
        video.srcObject = mediaStreamObj;
    }

    /*
    questa è la variante per dispositivi piu vecchi
    */
    else {
        video.src = window.URL.createObjectURL(mediaStreamObj)
    }
})
