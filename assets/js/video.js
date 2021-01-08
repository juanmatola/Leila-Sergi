let video = document.getElementById('homeVideo');

setTimeout(()=>{
    video.muted = true;
    video.play();
},200);

video.onended = () => {
    video.controls = true;
    video.play();
};