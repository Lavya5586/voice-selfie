var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event){
    console.log(event);
var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content == "take my selfie")
    {
        speak();
        console.log("Taking Selfie!!");
    }
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
  });
  camera = document.getElementById("camera");

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Taking Your Selfie In 5 Seconds";
  //I only added the word, "new" in the below line and it worked! 
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}


function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
}

function save() 
{
    var link = document.getElementById("link");
    var image = document.getElementById("capture_image");
    link.href = image;
    link.click();
}