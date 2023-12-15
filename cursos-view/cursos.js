let imagenes = ["../images/cursos/curso-bateria.jpg", "../images/cursos/curso-guitarra.png", "../images/cursos/curso-saxofon.jpg"];
let tituloCurso = ["Curso de Batería", "Curso de Guitarra", "Curso de Saxofón"];
let horario = ["De Lunes a Jueves, de 16:00 a 17:00h", "De Lunes a Jueves, de 12:00 a 14:00h", "De Martes a Viernes, de 18:00 a 19:00h"];
let foto;

let contador = 0;

function siguiente() {
    let html = "";
    if (contador == 0) {
        foto = imagenes[0];
        html += '<img src="' + foto + '"id="imagen">';
        document.getElementById('curso').innerHTML = tituloCurso[0];
        document.getElementById('horario').innerHTML = horario[0];
        contador++;
    }

    else if (contador == 1) {
        foto = imagenes[1];
        html += '<img src="' + foto + '"id="imagen">';
        document.getElementById('curso').innerHTML = tituloCurso[1];
        document.getElementById('horario').innerHTML = horario[1];
        contador++;
    }

    else if (contador == 2) {
        foto = imagenes[2];
        html += '<img src="' + foto + '"id="imagen">';
        document.getElementById('curso').innerHTML = tituloCurso[2];
        document.getElementById('horario').innerHTML = horario[2];
        contador++;
    } else {
        contador = 0;
        html += '<img src="' + foto + '"id="imagen">';
    }

    document.getElementById('img-container').innerHTML = html;

}
function anterior() {
    let html = "";
    if (contador == 2) {
        foto = imagenes[2];
        html += '<img src="' + foto + '"id="imagen">';
        document.getElementById('curso').innerHTML = tituloCurso[2];
        document.getElementById('horario').innerHTML = horario[2];
        contador--;
    }

    else if (contador == 1) {
        foto = imagenes[1];
        html += '<img src="' + foto + '"id="imagen">';
        document.getElementById('curso').innerHTML = tituloCurso[1];
        document.getElementById('horario').innerHTML = horario[1];
        contador--;
    }

    else if (contador == 0) {
        foto = imagenes[0];
        html += '<img src="' + foto + '"id="imagen">';
        document.getElementById('curso').innerHTML = tituloCurso[0];
        document.getElementById('horario').innerHTML = horario[0];
        contador--;
    } else {
        contador = 2;
        html += '<img src="' + foto + '"id="imagen">';
    }

    document.getElementById('img-container').innerHTML = html;
}
