function countDownBirthday() {
    const countDownDate = new Date("July 27, 2023").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const daysA = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hoursA = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesA = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondsA = Math.floor((distance % (1000 * 60)) / 1000);


    if (distance < 0) {
    console.log("¡Cuenta regresiva finalizada!");
    }else {
    document.getElementById("contador-dias").innerHTML = `${daysA}`; 
    document.getElementById("contador-horas").innerHTML = `${hoursA}`; 
    document.getElementById("contador-minutos").innerHTML = `${minutesA}`; 
    document.getElementById("contador-segundos").innerHTML = `${secondsA}`; 
    }
}
setInterval(countDownBirthday, 1000);