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
    startTimer();
  } else {
    // stop
    recorder.stop();
    recordVideoBtn.classList.remove("scale-record");
    stopTimer();
  }
});

// start timer

let timer = document.querySelector(".timer");

let timerID;

let counter = 0; // count seconds

function startTimer() {
  timer.style.display = "block";
  function displayTimer() {
    let totalSeconds = counter;

    let hours = Number.parseInt(totalSeconds / 3600);
    totalSeconds = totalSeconds % 3600; // remaining value

    let minutes = Number.parseInt(totalSeconds / 60);
    totalSeconds = totalSeconds % 60; // remaining value

    let seconds = totalSeconds;

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    timer.innerText = `${hours}:${minutes}:${seconds}`;

    counter++;
  }

  timerID = setInterval(displayTimer, 1000);
}

// stop timer

function stopTimer() {
  clearInterval(timerID);
  timer.innerText = "00:00:00";
  timer.style.display = "none";
}
