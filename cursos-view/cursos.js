let imagen =  ['../images/cursos/curso-batería.jpg', '../images/cursos/curso-guitarra.png', '../images/cursos/curso-saxofon.jpg'];
let indiceImagen = 0;



function mostrarImagen() {
    let imagen = document.querySelector("#miImagen");
    for (let i=0; i < imagen.length-1; i++ ) {
        imagen[i].style.display = "block";
        console.info[i]
        indiceImagen++;
    }
    document.getElementById('miImagen').src = imagen;
}



