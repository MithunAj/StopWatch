//timer objects
var mins = document.getElementById('minutes');
var secs = document.getElementById('seconds');
var milisecs = document.getElementById('miliseconds');

//button objects
var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var resetButton = document.getElementById('reset');

// variable used
var secondsCounter = 00;
var minsCounter = 00;
var milisecondsCounter = 00;
var started = false; // this variable to handle multiple clicks on the start button
var id;

var stopTimer = function(){
    clearInterval(id);
}

var startTimer = function (){
    started = true;
    id = setInterval(function(){
    // console.log('inside id');
    milisecondsCounter++;
    if(milisecondsCounter=='100'){
        secondsCounter++;
        if(secondsCounter=='60'){
            minsCounter++;
            if(minsCounter<10){
                mins.innerHTML = '0' + minsCounter;

            }else{
                mins.innerHTML = minsCounter;
            }
            secondsCounter = '00';
            secs.innerHTML = secondsCounter;
            milisecondsCounter = 00;
            milisecs.innerHTML = '00';
        }else if(secondsCounter<10){
            secs.innerHTML = '0' + secondsCounter;
            milisecondsCounter = 00;
            milisecs.innerHTML = '00';
        }else{
        secs.innerHTML = secondsCounter;
        milisecondsCounter = 00;
        milisecs.innerHTML = '00';
    }
    }else if(milisecondsCounter<10){
    milisecs.innerHTML = '0' + milisecondsCounter;
    }else{
    milisecs.innerHTML = milisecondsCounter;
    }
},10)
};

//Event handling of each buttons

startButton.addEventListener('click',function(){
    if(!started){
    startTimer();
    }
})

stopButton.addEventListener('click',function(){
    stopTimer();
    started = false;
})

resetButton.addEventListener('click',function(){
    stopTimer();
    secondsCounter = 00;
    minsCounter = 00;
    milisecondsCounter = 00;
    started = false;
    milisecs.innerHTML = '0' +milisecondsCounter;
    secs.innerHTML = '0' +secondsCounter;
    mins.innerHTML = '0' + minsCounter;
})