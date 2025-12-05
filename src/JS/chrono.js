let intervals = null
document.querySelector("#minusTime").addEventListener("click", () => {
        let timeDisplay = document.querySelector("#timeDisplay").textContent;
    console.log(timeDisplay.split(":"));
    let minutes = parseInt(timeDisplay.split(":")[1]);
    let hours = parseInt(timeDisplay.split(":")[0]);
    let seconds = parseInt(timeDisplay.split(":")[2]);
    if(!(seconds === 0 && minutes === 0 && hours ===0)){
        if(minutes == 0 && seconds == 0 && hours > 0){
            seconds = 30;
            minutes = 59;
            hours -= 1;
        }
        else if(seconds == 0){
            seconds = 30;
            minutes -= 1;
        }
        else{
            seconds -= 30;
        }  
        
        document.querySelector("#timeDisplay").textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

})
document.querySelector("#addTime").addEventListener("click", () => {
    let timeDisplay = document.querySelector("#timeDisplay").textContent;
    let minutes = parseInt(timeDisplay.split(":")[1]);
    let hours = parseInt(timeDisplay.split(":")[0]);
    let seconds = parseInt(timeDisplay.split(":")[2]);
    if(seconds >= 30){
        seconds = 0;
        minutes += 1;
    }
    else{
        seconds += 30;
    }
    if(minutes >= 60){
        minutes = 0;
        hours += 1;
    }
    document.querySelector("#timeDisplay").textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

})

document.querySelector("#restartTimer").addEventListener("click", () => {
    document.querySelector("#timeDisplay").textContent = "00:00:00";
});

document.querySelector("#startButton").addEventListener("click", () => {
    intervals = setInterval(decreaseTime,"1000");
});

document.querySelector("#pauseButton").addEventListener("click", () => {
    clearInterval(intervals);
});


function decreaseTime(){
    let timeDisplay = document.querySelector("#timeDisplay").textContent;
    let minutes = parseInt(timeDisplay.split(":")[1]);
    let hours = parseInt(timeDisplay.split(":")[0]);
    let seconds = parseInt(timeDisplay.split(":")[2])

    if(hours == 0 && minutes == 0 && seconds == 0){
        clearInterval(intervals);
        return;
    }
    if(seconds == 0 && minutes == 0 && hours > 0){
        seconds = 59;
        minutes = 59;
        hours -= 1;
    }
    else if(seconds == 0 && minutes > 0){
        seconds = 59;
        minutes -= 1;
    }
    else{
        seconds -= 1;
    }   
    document.querySelector("#timeDisplay").textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}