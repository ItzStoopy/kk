Webcam.set({

    width:350,
    height:300,
    image_format : 'png',
    png_quality:1080
    
    });
    camera = document.getElementById("camera");
    Webcam.attach('#camera');
    function take_snapshot()
    {

webcam.snap (function(data_uri){
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

});}

console.log('ml5 verisonn;', ml5.verison);
classifer = ml5.imageClassifer('https://teachablemachine.withgoogle.com/models/sINyRhE7B/model.json',modaleLoaded)

function modelLoaded(){

console.log ('Model Loaded!');

}

function speak (){

var synth= window.speechSynthesis;
speak_data_1="The first prediction is" + prediction_1;
speak_data_2="The second prediction is" + prediction_2;
var utterThis = new SpeechSynthesisUtterance (speak_data_1 +speak_data_2 );
synth.speak(utterThis);
}



