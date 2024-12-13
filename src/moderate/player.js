window.player = {
    cover: document.querySelector(".card-image"),
    title: document.querySelector(".card-content h5"),
    artist: document.querySelector(".card-content p"),
    audio: document.querySelector("audio"),
    audioList: audios,
    currentAudio: {},
    currentPlaying: 0,
    start() {
    
        this.update();

        this.audio.onended = () => this.next();
    },
    next() {
        this.currentPlaying++;

        if(this.currentPlaying == this.audioList.length) this.restart();
        this.update();
        this.audio.play();
    },
    update(){
        this.currentAudio = this.audioList[this.currentPlaying];

        this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover`;
        this.title.innerHTML = this.currentAudio.title;
        this.artist.innerHTML = this.currentAudio.artist;
        this.audio.src = path(this.currentAudio.file);
    },
    restart(){
        this.currentPlaying = 0;
        this.update();
    }
};
