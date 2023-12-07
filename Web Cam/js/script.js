// write code for web cam

let video = document.querySelector("video");
let recordVideo = document.querySelector(".record-btn");
let recordPhoto = document.querySelector(".capture-btn");

let recordVideoBtn = document.querySelector(".record-video");
let recordPhotoBtn = document.querySelector(".record-photo");

// let filterLayer = document.querySelector(".filter-layer");
// let allFilters = document.querySelectorAll(".filter");

let timer = document.querySelector(".timer");

var audio = document.getElementById("audioPlayer");

let timerID;

let transparentColor = "transparent";

let counter = 0; // count seconds

let recorder;
let chunks = []; // media data

let recordFlag = false;
// let transparentColor = "transparent";

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
    // let videoURL = URL.createObjectURL(blob);

    // store vedios & images in database

    if (db) {
      // generate id

      let videoID = shortid();

      let databaseTransaction = db.transaction("video", "readwrite");

      let videoStore = databaseTransaction.objectStore("video");

      let videoEntry = {
        id: `img-${imageID}`,
        blobData: blob,
      };

      videoStore.add(videoEntry);
    }

    // let a = document.createElement("a");

    // a.href = videoURL;
    // a.download = "stream.mp4";
    // a.click();
  });
});

recordVideo.addEventListener("click", () => {
  console.log("photo clicked");
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

recordPhoto.addEventListener("click", (e) => {
  recordPhotoBtn.classList.add("scale-capture");

  // console.log("photo clicked");

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }

  let canvas = document.createElement("canvas");

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  let tool = canvas.getContext("2d");

  tool.drawImage(video, 0, 0, canvas.width, canvas.height);

  // filter layer

  tool.fillStyle = transparentColor;

  tool.fillRect(0, 0, canvas.width, canvas.height);

  let imageURL = canvas.toDataURL();

  if (db) {
    // generate id

    let imageID = shortid();

    let databaseTransaction = db.transaction("image", "readwrite");

    let imageStore = databaseTransaction.objectStore("image");

    let imageEntry = {
      id: `img-${imageID}`,
      url: imageURL,
    };

    imageStore.add(imageEntry);
  }

  // let a = document.createElement("a");

  // a.href = imageURL;
  // a.download = "image.jpg";
  // a.click();

  setTimeout(() => {
    recordPhotoBtn.classList.remove("scale-capture");
  }, 500);
});

// start timer

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

// filtering image

// Filtering logic
let filterLayer = document.querySelector(".filter-layer");
let allFilters = document.querySelectorAll(".filter");

allFilters.forEach((filterElem) => {
  filterElem.addEventListener("click", (e) => {
    // get style
    transparentColor =
      getComputedStyle(filterElem).getPropertyValue("background-color");
    filterLayer.style.backgroundColor = transparentColor;
  });
});
