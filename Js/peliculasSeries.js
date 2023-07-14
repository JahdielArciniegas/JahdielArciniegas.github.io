const btnPeliculas = document.getElementById("movies");
const btnSeries =  document.getElementById("series");
const peliculas =   document.querySelectorAll(".peliculas");
const series =   document.querySelectorAll(".series");
const mostrarPeliculas = document.querySelectorAll(".column-2");
const mostrarSeries = document.querySelectorAll(".column-3");
const value = false;


btnPeliculas.addEventListener('click', () => {
    peliculas.forEach(elemento => {
        elemento.classList.toggle('on');
    });
    series.forEach(elemento => {
        elemento.classList.toggle('off')
    })
    peliculas.forEach(elemento => {
        elemento.classList.remove('off');
    });
    series.forEach(elemento => {
        elemento.classList.remove('on')
    })
    mostrarPeliculas.forEach(elemento => {
        elemento.classList.toggle('activado');
    });
    mostrarSeries.forEach(elemento => {
    elemento.classList.remove('activado')
    })
});

btnSeries.addEventListener('click', () => {
    peliculas.forEach(elemento => {
        elemento.classList.toggle('off');
    });
    series.forEach(elemento => {
        elemento.classList.toggle('on')
    })
    peliculas.forEach(elemento => {
        elemento.classList.remove('on');
    });
    series.forEach(elemento => {
        elemento.classList.remove('off')
    })
        mostrarSeries.forEach(elemento => {
            elemento.classList.toggle('activado');
        });
        mostrarPeliculas.forEach(elemento => {
            elemento.classList.remove('activado');
        });
});