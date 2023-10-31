previsao1 = "";
previsao2 = "";

Webcam.set({
    width: 350,
    height: 300,
    imageFormat: "png",
    pngQuality: 90,
})

camera = document.getElementById("camera");

Webcam.attach("#camera");

function takeSnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>'
    })
}

console.log("ml5:", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/J2Ip11PDF/model.json",
    modelLoaded
)

function modelLoaded() {
    console.log("modeloCarregado")
}

function speak() {
    const synth=window.speechShyntesis;
speakData1="A Primeira previsão é: "+previsao1;
speakData2="A Primeira previsão é: "+previsao2;

const utterThis=new SpeechSynthesisUtterance(speakData1+speakData2);
synth.speak(utterThis)
}