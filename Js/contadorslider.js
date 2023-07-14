function updateCountdown() {
    const countDownDate = new Date("August 14, 2022").getTime();
    const now = new Date().getTime();
    const distance = now - countDownDate;
        
    const weeks= Math.floor(distance / (1000 * 60 * 60 * 24 * 7))
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("counter").innerHTML = `Han pasado ${weeks} semanas, ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos desde el 14 de agosto de 2022 y no me cansaria de ti<3.`;
}

setInterval(updateCountdown, 1000);

(function(){
    const deslizar = [...document.querySelectorAll('.textos-conjuntos')]
    const siguiente = document.getElementById("after") 
    const anterior = document.getElementById("before")
    let value;

    siguiente.addEventListener('click', ()=>changePosition(1));
    anterior.addEventListener('click', ()=>changePosition(-1));

    function changePosition(cambio){
        const currentElement = parseInt(document.querySelector('.textos-conjuntos--show').dataset.id);

        value= currentElement;
        value+= cambio;
        if(value===0 || value== deslizar.length+1 ){
            value = value === 0 ? deslizar.length : 1
        }

        deslizar[currentElement-1].classList.toggle('textos-conjuntos--show');
        deslizar[value-1].classList.toggle('textos-conjuntos--show');
    }
})()