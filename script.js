/* Agregar ceros a la izquierda a los dias, horas,min,secs */
const fill = (number, len) =>{
    return "0".repeat(len - number.toString().length) + number.toString();
}
/* Funcion del countdown */
const offersCountdown= ()=>{
    let days = 2;
    let hrs = 10;
    let min=10;
    let secs=10;
    let daysInput = document.getElementById("days");
    let hoursInput = document.getElementById("hours");
    let minutesInput = document.getElementById("minutes");
    let secondsInput = document.getElementById("seconds");
   
    setInterval(() => {
        if(secs>0){
            secs-=1;
        }else if(min>0){
            min-=1;
            secs=60;
        }else if(hrs>0){
            hrs-=1;
            min=60;
            secs=60;
        }else if(days>0){
            days-=1;
            min=60;
            secs=60;
            hrs=60;
        }
        daysInput.innerHTML = fill(days,2);
        hoursInput.innerHTML = fill(hrs,2);
        minutesInput.innerHTML = fill(min,2);
        secondsInput.innerHTML = fill(secs,2);

    }, 1000);
     
}

const validarFormularioContacto = ()=>{

}



offersCountdown();






/* jquery zoom image */
$(document).ready(()=>{
    $('#image').imagezoomsl({zoomrange:[4,4]})
    
})






