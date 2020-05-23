
var constraints = { video: { facingMode: "user" }, audio: false };


// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger"),
    backCam = document.querySelector("#camera--back"),
    frontCam = document.querySelector("#camera--front");

// Function for accessing the webcam and stream to cameraView
function cameraStart(){
  navigator.mediaDevices.getUserMedia(constraints).then(function(stream){
    cameraView.srcObject = stream;
  }).catch(function(error){
    console.error("Ooops ! Something is wrong", error);
  })
};

// set event listerner callback to cameraStart function
window.addEventListener("load", cameraStart, false);
