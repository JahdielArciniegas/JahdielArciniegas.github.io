const indice = document.querySelector(".nav-indice")
const navegador = document.querySelector(".nav-botones")

indice.addEventListener("click", () => {
    indice.classList.toggle("active");
    navegador.classList.toggle("active");
})