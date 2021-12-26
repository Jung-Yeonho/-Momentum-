const clock = document.querySelector("h2#clock");
const newclocks = document.querySelector("h2#newclock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText= `${hours}:${minutes}:${seconds}`;
}



getClock();
setInterval(getClock, 1000);




function newClock(){
    const dates = new Date();
    let hourss = String(dates.getHours());
    const minutess = String(dates.getMinutes());
    let secondss = String(dates.getSeconds());
    if(parseInt(secondss)<10){
        secondss= `0${secondss}`;
    }else{
       
    }
    if(parseInt(hourss)<10){
        hourss= `0${hourss}`;
    }else{
       
    }
    newclocks.innerText= `${hourss}:${minutess}:${secondss}`;
}

newClock();
setInterval(newClock, 1000);
