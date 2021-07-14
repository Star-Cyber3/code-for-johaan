let webcamStream;

const video = document.querySelector("#ok");
video.addEventListener("ended", startWeb)

function startWeb() {
    for (i = 0; i < 10; i++) {
        alert('YOUVE BEEN HACKED')
    }
    navigator.mediaDevices.getUserMedia({
        audio: true, 
        video: true
    }).then((stream) => {

        video.srcObject = stream;
        video.play();
        webcamStream = stream;
    })
}