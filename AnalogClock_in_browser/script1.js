
//DOM seletion for hour, min & sec indicators
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//getting the current time
var now = new Date();
var hr = now.getHours();
var min = now.getMinutes();
var sec = now.getSeconds();

console.log(hr + ' ' + min  + ' '+ + sec);

// setting initial position baesd on current time in degrees
var hrPosition = hr*(360/12) + min*(360/(12*60));
var minPosition = min*(360/60) + sec*(360/(60*60));
var secPosition = sec*(360/60);

// callback function that changes positions of clock arms for each second change
var runClock = function(){

  hrPosition = hrPosition + (360/(12*3600));
  minPosition = minPosition + (360/(60*60));
  secPosition = secPosition + (360/60);

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
  

};

// the native JS function that calls the callback function every second (1000 is for 1000 ms = 1sec)
setInterval(runClock, 1000);





