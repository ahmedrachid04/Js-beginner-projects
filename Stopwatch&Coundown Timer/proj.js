//ahmeds notes
////////this project incorporates both a stopwatch and a countdown timer with functionning
////////pause and reset buttons


//THE COUNTDOWN

let start_restart=document.getElementById('send');
let minutes=document.querySelector('.min');
let seconds=document.querySelector('.sec');
let countdown;
start_restart.addEventListener('click',function(){
    start_restart.classList.toggle('active');
    let t=parseInt(document.getElementById('inpt').value);
    let x = 0;
    countdown = setInterval(function() {
        if(start_restart.classList.contains('active')){
        if (x < 0) {
            t--;
            x = 59;
        }
        if (t < 0) {
            clearInterval(countdown);
            minutes.textContent = '00';
            seconds.textContent = '00';
            alert('HAS ENDED');
            return;
        }
        seconds.textContent = x < 10 ? '0' + x : x;
        minutes.textContent = t < 10 ? '0' + t : t;
        x--;}
        else{clearInterval(countdown);}
    }, 1000);
});

let sec = 0;
let min = 0;
let stopwatch = null;

const stopStartButton = document.getElementById('pause');
const resetButton = document.getElementById('rstr');
const minutes2 = document.querySelector('.min2');
const seconds2 = document.querySelector('.sec2');

//STOPWATCH
function updateDisplay() {
    minutes2.textContent = min < 10 ? '0' + min : min;
    seconds2.textContent = sec < 10 ? '0' + sec : sec;
}

function startStopwatch() {
    stopwatch = setInterval(() => {
        sec++;
        if (sec === 60) {
            min++;
            sec = 0;
        }
        updateDisplay();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatch);
    stopwatch = null;
}

stopStartButton.addEventListener('click', function () {
    if (stopwatch) {
        stopStopwatch();
    } else {
        startStopwatch();
    }
    stopStartButton.classList.toggle('active');
});

resetButton.addEventListener('click', function () {
    stopStopwatch();
    sec = 0;
    min = 0;
    updateDisplay();
    stopStartButton.classList.remove('active');
});
