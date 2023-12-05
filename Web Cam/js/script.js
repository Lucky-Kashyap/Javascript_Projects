// write code for web cam

let video = document.querySelector("video");
let recordVideo = document.querySelector(".record-btn");
let recordPhoto = document.querySelector(".capture-btn");

let recordVideoBtn = document.querySelector(".record-video");
let recordPhotoBtn = document.querySelector(".record-photo");

let recorder;

let recordFlag = false;

let constraints = {
  video: true,
  audio: true,
};

navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
  video.srcObject = stream;

  recorder = new MediaRecorder(stream);
});

recordVideo.addEventListener("click", () => {
  if (!recorder) return;

  recordFlag = !recordFlag;

  if (recordFlag) {
    // start
    recorder.start();
    recordVideoBtn.classList.add("scale-record");
  } else {
    // stop
    recorder.stop();
    recordVideoBtn.classList.remove("scale-record");
  }
});
