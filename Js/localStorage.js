const movieL = {
    nombre:'',
    imagen:'',
    calificacionJ:'',
    calificacionM:'',
    indice:'',
}

function movieC(nombre,imagen,calificacionJ,calificacionM,indice){
    this.nombre = nombre,
    this.imagen = imagen,
    this.calificacionJ = calificacionJ,
    this.calificacionM = calificacionM,
    this.indice = indice
}

const gatoCB = new movieC("Gato con Botas","img/peliculas/Gato-con-Botas.jpg","0","0","1");
const knivesOT = new movieC("Krives Out","img/peliculas/Knives-out.jpg","0","0","2");
const pinochoGT = new movieC("Pinocho DGDT","img/peliculas/Pinocho_de_Guillermo_del_toro.jpg","0","0","3");
const singT = new movieC("Sing 2","img/peliculas/Sing-2.jpg","0","0","4");
const spidermanATV = new movieC("Spiderman ATSV","img/peliculas/spiderman-atv.jpg","0","0","5");
const superMario = new movieC("Super Mario Bros","img/peliculas/Super_Mario_Bros.jpg","0","0","6");
const tetris = new movieC("Tetris","img/peliculas/Tetris.jpg","0","0","7");
const transformersB = new movieC("Transformers EDDLB","img/peliculas/Transformers-eddlb.jpg","0","0","8");
localStorage.setItem("objeto1", JSON.stringify(gatoCB));
localStorage.setItem("objeto2", JSON.stringify(knivesOT));
localStorage.setItem("objeto3", JSON.stringify(pinochoGT));
localStorage.setItem("objeto4", JSON.stringify(singT));
localStorage.setItem("objeto5", JSON.stringify(spidermanATV));
localStorage.setItem("objeto6", JSON.stringify(superMario));
localStorage.setItem("objeto7", JSON.stringify(tetris));
localStorage.setItem("objeto8", JSON.stringify(transformersB));


const seriesL = {
    nombre:'',
    imagen:'',
    calificacionJ:'',
    calificacionM:'',
    indice:'',
}

function seriesC(nombre,imagen,calificacionJ,calificacionM,indice){
    this.nombre = nombre,
    this.imagen = imagen,
    this.calificacionJ = calificacionJ,
    this.calificacionM = calificacionM,
    this.indice = indice
}

const blueL = new seriesC("BlueLock","img/series/Blue-lock.jpg","0","0","1");
const kNY = new seriesC("Kimetsu no Yaiba","img/series/KNY-arco-2.jpg","0","0","2");
const moriartyP = new seriesC("Yuukoku no Moriarty","img/series/Moriarty-on-Patriot.jpg","0","0","3");
const sherlock = new seriesC("Sherlock BBC","img/series/Sherlock.jpg","0","0","4");
const spyXF = new seriesC("Spy x Family","img/series/spy-x-family.jpg","0","0","5");
localStorage.setItem("objetos1", JSON.stringify(blueL));
localStorage.setItem("objetos2", JSON.stringify(kNY));
localStorage.setItem("objetos3", JSON.stringify(moriartyP));
localStorage.setItem("objetos4", JSON.stringify(sherlock));
localStorage.setItem("objetos5", JSON.stringify(spyXF));

function mostrarPantallaS() {
    const objetosAlmacenadosS = [];

    for (let i = 1; i <= 5; i++) {
        const objetoJSON = localStorage.getItem(`objetos${i}`);
        if (objetoJSON) {
            const objeto = JSON.parse(objetoJSON);
            objetosAlmacenadosS.push(objeto);
        }
    }

    const mostrarSerie = parseInt(
        document.querySelector(".contenedor-series").dataset.id
    );

    for (let j = 1; j <= objetosAlmacenadosS.length; j++) {
        if (mostrarSerie === j) {
            const serie = objetosAlmacenadosS[j - 1];
            document.getElementById("name-serie").innerHTML = serie.nombre;
            document.getElementById("imgn-serie").innerHTML = `<img src="${serie.imagen}" alt="${serie.nombre}"/>`
            document.getElementById("puntaje-1").innerHTML = `<input type="text" id="p1" disabled value="${serie.calificacionJ}"/>`
            document.getElementById("puntaje-2").innerHTML = `<input type="text" id="p2" disabled value="${serie.calificacionM}"/>`
            const btnEditar1 = document.getElementById('editar1');
            const btnEditar2 = document.getElementById('editar2');
            const puntaje1 = document.getElementById('p1');
            const puntaje2 = document.getElementById('p2');  
            btnEditar1.addEventListener('click', function() {
                if(puntaje1.disabled){
                puntaje1.disabled = false;
                btnEditar1.innerHTML ='enviar';
                }else if(puntaje1.value > 0 && puntaje1.value <= 10) {
                    const nuevoPuntajes = puntaje1.value;
                    serie.calificacionJ = nuevoPuntajes;
                    localStorage.setItem(`objetos${j}`, JSON.stringify(serie));
                    btnEditar1.innerHTML = 'editar';
                    puntaje1.disabled = true;
                }else {
                    alert(`El valor de ${puntaje1.value} no es permitido, Seleccione un numero del 1 al 10`);
                }
            });
            
            btnEditar2.addEventListener('click', function() {
                if(puntaje2.disabled){
                    puntaje2.disabled = false;
                    btnEditar2.innerHTML ='enviar';
                    }else if(puntaje2.value > 0 && puntaje2.value <= 10){
                        const nuevoPuntajes = puntaje2.value;
                        serie.calificacionM = nuevoPuntajes;
                        localStorage.setItem(`objetos${j}`, JSON.stringify(serie));
                        btnEditar2.innerHTML = 'editar';
                        puntaje2.disabled = true;
                    }else {
                        alert(`El valor de ${puntaje2.value} no es permitido, Seleccione un numero del 1 al 10`);
                    }
            });
        }
    }
}

(function () {
    const adelante = document.getElementById("adelanteS");
    const atras = document.getElementById("atrasS");
    let value;

    adelante.addEventListener("click", () => cambioPosicionS(1));
        atras.addEventListener("click", () => cambioPosicionS(-1));

    function cambioPosicionS(cambio) {
        const currentElement = parseInt(
            document.querySelector(".contenedor-series").dataset.id
        );
        const totalElements = 5; // Cambiar aquí el número total de elementos deseados
        mostrarPantallaS();
        value = currentElement + cambio;
        if (value > totalElements) {
            value = 1;
        } else if (value < 1) {
            value = totalElements;
        }

        document.querySelector(".contenedor-series").dataset.id = value;
    }

    mostrarPantallaS();
})();

function mostrarPantallaP() {
    const objetosAlmacenadosP = [];

    for (let i = 1; i <= 8; i++) {
        const objetoSJSON = localStorage.getItem(`objeto${i}`);
        if (objetoSJSON) {
            const objetoS = JSON.parse(objetoSJSON);
            objetosAlmacenadosP.push(objetoS);
        }
    }

    const mostrarPelicula = parseInt(
        document.querySelector(".contenedor-peliculas").dataset.id
    );

    for (let j = 1; j <= objetosAlmacenadosP.length; j++) {
        if (mostrarPelicula === j) {
            const peliculas = objetosAlmacenadosP[j - 1];
            document.getElementById("name-movie").innerHTML = peliculas.nombre;
            document.getElementById("imgn-movie").innerHTML = `<img src="${peliculas.imagen}" alt="${peliculas.nombre}"/>`
            document.getElementById("puntaje-3").innerHTML = `<input type="text" id="p3" disabled value="${peliculas.calificacionJ}"/>`
            document.getElementById("puntaje-4").innerHTML = `<input type="text" id="p4" disabled value="${peliculas.calificacionM}"/>`
            const btnEditar3 = document.getElementById('editar3');
            const btnEditar4 = document.getElementById('editar4');
            const puntaje3 = document.getElementById('p3');
            const puntaje4 = document.getElementById('p4');  
            btnEditar3.addEventListener('click', function() {
                if(puntaje3.disabled){
                puntaje3.disabled = false;
                btnEditar3.innerHTML ='enviar';
                }else if(puntaje3.value > 0 && puntaje3.value <= 10){
                    const nuevoPuntaje = puntaje3.value;
                    peliculas.calificacionJ = nuevoPuntaje;
                    localStorage.setItem(`objeto${j}`, JSON.stringify(peliculas));
                    btnEditar3.innerHTML = 'editar';
                    puntaje3.disabled = true;
                }else {
                    alert(`El valor de ${puntaje3.value} no es permitido, Seleccione un numero del 1 al 10`);
                }
            });
            
            btnEditar4.addEventListener('click', function() {
                if(puntaje4.disabled){
                    puntaje4.disabled = false;
                    btnEditar4.innerHTML ='enviar';
                    }else if(puntaje4.value > 0 && puntaje4.value <= 10){
                        const nuevoPuntaje = puntaje4.value;
                        peliculas.calificacionM = nuevoPuntaje;
                        localStorage.setItem(`objeto${j}`, JSON.stringify(peliculas));
                        btnEditar4.innerHTML = 'editar';
                        puntaje4.disabled = true;
                    } else {
                        alert(`El valor de ${puntaje4.value} no es permitido, Seleccione un numero del 1 al 10`);
                    }
            });
        }
    }
}

(function () {
    const adelante = document.getElementById("adelanteP");
    const atras = document.getElementById("atrasP");
    let value;

    adelante.addEventListener("click", () => cambioPosicionP(1));
        atras.addEventListener("click", () => cambioPosicionP(-1));

    function cambioPosicionP(cambio) {
        const currentElement = parseInt(
            document.querySelector(".contenedor-peliculas").dataset.id
        );
        const totalElements = 8; // Cambiar aquí el número total de elementos deseados
        mostrarPantallaP();
        value = currentElement + cambio;
        if (value > totalElements) {
            value = 1;
        } else if (value < 1) {
            value = totalElements;
        }

        document.querySelector(".contenedor-peliculas").dataset.id = value;
    }

    mostrarPantallaP();
})();





//!Series

{/* <div class="contenedor-series">
                <div class="serie">
                    <h2 class="nombre-serie"></h2>
                    <span class="img-serie"></span>
                </div>
                <div class="puntajes">
                    <div class="serie-yo">
                        <h4 class="nombre-yo-s">Jadi</h4>
                        <p class="puntaje-yo-s"><input type="text" disabled></p>
                        <button class="editar-puntaje-s1 registro">editar</button>
                    </div>
                    <div class="serie-mare">
                        <h4 class="nombre-mare-s">Mare</h4>
                        <p class="puntaje-mare-s"><input type="text" disabled></p>
                        <button class="editar-puntaje-s2 registro">editar</button>
                    </div>
                </div>
            </div> */
}

//!Peliculas

{/* <div class="contenedor-peliculas">
                <div class="pelicula">
                    <h2 class="nombre-pelicula">Tetris</h2>
                    <span class="img-pelicula"><img src="Img/Galeria/regalo mare.jpg" alt="prueba"></span>
                </div>
                <div class="puntajes">
                    <div class="pelicula-yo">
                        <h4 class="nombre-yo-p">Jadi</h4>
                        <form class="puntaje-yo-p"><input type="text" disabled></form>
                        <button class="editar-puntaje-p-1 registro">editar</button>
                    </div>
                    <div class="pelicula-mare">
                        <h4 class="nombre-mare-p">Mare</h4>
                        <p class="puntaje-mare-p"><input type="text" disabled></p>
                        <button class="editar-puntaje-p2 registro">editar</button>
                    </div>
                </div>
            </div> */}