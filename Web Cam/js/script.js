// write code for web cam

let video = document.querySelector("video");
let recordVideo = document.querySelector(".record-btn");
let recordPhoto = document.querySelector(".capture-btn");

let recordVideoBtn = document.querySelector(".record-video");
let recordPhotoBtn = document.querySelector(".record-photo");

let recorder;
let chunks = []; // media data

let recordFlag = false;

let constraints = {
  video: true,
  audio: true,
};

navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
  video.srcObject = stream;

  recorder = new MediaRecorder(stream);

  recorder.addEventListener("start", (e) => {
    chunks = [];
  });
  recorder.addEventListener("dataavailable", (e) => {
    chunks.push(e.data);
  });

  recorder.addEventListener("stop", (e) => {
    // conversion data to video

    let blob = new Blob(chunks, { type: "video/mp4" });
    let videoURL = URL.createObjectURL(blob);

    let a = document.createElement("a");

    a.href = videoURL;
    a.download = "stream.mp4";
    a.click();
  });
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
