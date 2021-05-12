// Get DOM element
const video = document.getElementById('video');
const  play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//creating a function for clicking on video
function toggelVideoStatus(){
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

//creat function for updating play/pause icon
function updatePlayIcon() {
    if(video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

// creat function to update the progress bar
function updateProgress() {
    progress.value = (video.currentTime / video.duration) *100; 

    //  set the Time for Timestamp
    let mins = Math.floor(video.currentTime /60);
    if(mins < 10) {
        mins = '0'+ String(mins);
    }
    let secs = Math.floor(video.currentTime % 60);
    if(secs <10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;
}
// creat function to stop the video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}
// creat function to update the video using the slider
function setVideoProgress() {
    video.currentTime = +(progress.value * video.duration) /100;
}
// Event Listners
// 1. Event Listener for clicking on the video
video.addEventListener('click', toggelVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play',updatePlayIcon);
video.addEventListener('timeupdate',updateProgress);

//2. Event Listner for play button
play.addEventListener('click',toggelVideoStatus);


//3. Event Listner for stop button
stop.addEventListener('click',stopVideo);

// 4. Event listner for progress bar
progress.addEventListener('change',setVideoProgress);


