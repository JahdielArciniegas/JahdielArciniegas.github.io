const btns = document.querySelectorAll(".boton-slider")
const features = document.querySelectorAll(".feature")
const imagenes = document.querySelectorAll(".imagen-menu")

var sliderFeatures = function(manual){
    btns.forEach((btn)=> {
        btn.classList.remove("active");
    });

    features.forEach((feature)=> {
        feature.classList.remove("active");
    });

    imagenes.forEach((imagen)=> {
        imagen.classList.remove("active");
    });

    btns[manual].classList.add("active");
    features[manual].classList.add("active");
    imagenes[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () =>{
        sliderFeatures(i);
    });
});