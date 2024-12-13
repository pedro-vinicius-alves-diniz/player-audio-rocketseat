window.player = {
    cover: document.querySelector(".card-image"),
    title: document.querySelector(".card-content h5"),
    artist: document.querySelector(".card-content p"),
    audio: document.querySelector("audio"),
    data: {
        title:
            "Como começei a programar / Por que criamos a Rocketseat / Nossa Stack",
        artist: "Diego Fernandes",
        cover: "files/como-comecei.jpg",
        file: "files/como-comecei.mp3"
    },
    start() {
        this.cover.style.background = `url('${this.data.cover}') no-repeat center center / cover`;
        this.title.innerHTML = this.data.title;
        this.artist.innerHTML = this.data.artist;
        this.audio.src = this.data.file;
    }
};
