const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Check Playing 

let isPlaying = false;




// Play

function playSong(){
    isPlaying = true;
    music.play();

}

// Pause

function pauseSong(){
    isPlaying = false;
    music.pause();
    
}

// Play or Pause Listener 

playBtn.addEventListener('click', () =>  (isPlaying ? pauseSong() : playSong()  ));