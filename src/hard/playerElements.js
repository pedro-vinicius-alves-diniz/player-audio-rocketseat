import { toMinute } from "./utils.js";

export default {
    get() {
        this.cover = document.querySelector(".card-image");
        this.title = document.querySelector(".card-content h5");
        this.artist = document.querySelector(".card-content p");
        this.playPause = document.querySelector("#play-pause")
        this.vol = document.querySelector("#vol");
        this.volControl = document.querySelector("#vol-control");
        this.seekbar = document.querySelector("#seekbar");
        this.currentDuration = document.querySelector("#current-duration")
        this.totalDuration = document.querySelector("#total-duration")
    },
    createAudioElement(audio){
        this.audio = new Audio(audio);
    },
    actions(){
        this.audio.onended = () => this.next(); 
        this.audio.ontimeupdate = () => this.timeUpdate();
        this.playPause.onclick = () => this.togglePlayPause();
        this.vol.onclick = () => this.toggleMute();
        this.volControl.oninput = () => this.setVolume(this.volControl.value);
        this.volControl.onchange = () => this.setVolume(this.volControl.value);
        this.seekbar.oninput = () => this.setSeek(this.seekbar.value);
        this.seekbar.onchange = () => this.setSeek(this.seekbar.value);
        this.seekbar.max = this.audio.duration;
        this.totalDuration.innerHTML = toMinute(this.audio.duration)
    }
    
};