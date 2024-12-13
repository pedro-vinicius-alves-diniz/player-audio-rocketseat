import audios from "./data.js";
import { path, toMinute } from "./utils.js";
import elements from "./playerElements.js";

export default {

    audioList: audios,
    currentAudio: {},
    currentPlaying: 0,
    isPlaying: false,
    isMuted: false,
    start() {
        elements.get.call(this);

        this.update();
    },
    play() {
        this.isPlaying = true;
        this.audio.play();
        this.playPause.innerHTML = "pause"
    },
    pause() {
        this.isPlaying = false
        this.audio.pause();
        this.playPause.innerHTML = "play_arrow"
    },
    togglePlayPause() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    },
    toggleMute() {
        this.audio.muted = !this.audio.muted;
        this.vol.innerHTML = this.audio.muted ? "volume_down" : "volume_up"
    },
    next() {
        this.currentPlaying++;

        if (this.currentPlaying == this.audioList.length) this.restart();
        this.update();
        this.audio.play();
    },
    setVolume(value) {
        this.audio.volume = value / 100
    },
    setSeek(value) {
        this.audio.currentTime = value;
    },
    update() {
        this.currentAudio = this.audioList[this.currentPlaying];

        this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover`;
        this.title.innerHTML = this.currentAudio.title;
        this.artist.innerHTML = this.currentAudio.artist;
        elements.createAudioElement.call(this, path(this.currentAudio.file))
        this.seekbar.max = this.audio.duration

        this.audio.onloadeddata = () => {
            elements.actions.call(this);
        };
    },
    timeUpdate(){
        this.currentDuration.innerHTML = toMinute(this.video.currentTime);
        this.seekbar.value = this.audio.currentTime;
    },
    restart() {
        this.currentPlaying = 0;
        this.update();
    }
};
