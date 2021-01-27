export default class AutoVideo {
    constructor (videoId){
        this.video = document.getElementById(videoId);
        this.video.muted = true;
        this.play();
    }

    play() {
        this.video.play();
    }

    pause() {
        this.video.pause();
    }

    loopOn(){
        this.video.onended = () => {
            this.video.controls = true;
            this.video.play();
        }
    }
    
    loopOff() {
        this.video.onended = null;
    }
}