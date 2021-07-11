

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>' ;
    });
}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lp8VPDgN5/model.json', modalLoaded)
                                 
function modalLoaded(){
    console.log('Model Loaded');
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "and the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}
function gotResult(error, results) {
    if (error){
        
    } else {

    
        console.log(results);
        document.getElementById("finger_name").innerHTML = results[0].label;
        document.getElementById("finger_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(prediction_1 == "Nice"){
            document.getElementById("update_finger").innerHTML = "&#128076;"; 
        }
        if(prediction_1 == "Thumbs Up"){
            document.getElementById("update_finger").innerHTML = "&#128077;"; 
        }
        if(prediction_1 == "Thumbs Down"){
            document.getElementById("update_finger").innerHTML = "&#128078;"; 
        }
        if(prediction_1 == "Hands Up"){
            document.getElementById("update_finger").innerHTML = "&#128400;"; 
        }
        if(prediction_1 == "Victory"){
            document.getElementById("update_finger").innerHTML = "&#9996;"; 
        }

        if(prediction_2 == "Nice"){
            document.getElementById("update_finger2").innerHTML = "&#128076;"; 
        }
        if(prediction_2 == "Thumbs Up"){
            document.getElementById("update_finger2").innerHTML = "&#128077;"; 
        }
        if(prediction_2 == "Thumbs Down"){
            document.getElementById("update_finger2").innerHTML = "&#128078;"; 
        }
        if(prediction_2 == "Hands Up"){
            document.getElementById("update_finger2").innerHTML = "&#128400;"; 
        }
        if(prediction_2 == "Victory"){
            document.getElementById("update_finger2").innerHTML = "&#9996;"; 
        }
    }
}