 //ahmeds notes
 ////////this project includes a functional shuffle button, a functional progress bar
 ////////and incorporates a modal/pop up
 
 
 let progress=document.getElementById("progress")
 let song=document.getElementById("song")
 let src=document.getElementById("songsrc")
 let artist=document.querySelector(".artist")
 let title=document.querySelector(".title")
 let coverArt=document.querySelector(".coverArt")
 let ctr=document.getElementById("ctrl")
 let back=document.querySelector(".back")
 let myModal=document.getElementById("myModal")
 let songListContainer=document.querySelector(".songListContainer")
 let openQueue=document.querySelector(".queue")
 let closeQueue=document.querySelector(".close")
 let shuffle=document.querySelector(".shuffle")
 let playPause=document.querySelector(".pause")

 const musicList=[{
    name:"America Has a Problem",
    artist: "Beyonce, Kendrick Lamar",
    src: "AHAP.mp3",
    img: "ahap.png"
 },
 {
    name:"3 Libras",
    artist: "A Perfect Circle",
    src: "threeLibras.mp3",
    img: "apc.jpg"
 },
 {
    name:"Alright",
    artist: "Kendrick Lamar",
    src: "Alright.mp3",
    img: "kl.jpg"
 },
 {
    name:"360",
    artist: "Charli XCX",
    src: "threeSixty.mp3",
    img: "cxcx.png"
},
 {
    name:"365",
    artist: "Charli XCX",
    src: "threeSixFive.mp3",
    img: "cxcx.png"
 },
 {
    name:"The Recipe",
    artist: "Kendrick Lamar, Dr. Dre",
    src: "Recipe.mp3",
    img: "kl.jpg"
 },
 {
    name:"Toxicity",
    artist: "System Of A Down",
    src: "Toxicity.mp3",
    img: "soad.jpg"}

]

let counter = 0;
let next=document.querySelector(".forward")

next.addEventListener("click", () => {
    if(!shuffle.classList.contains("active")){
        if (counter < musicList.length - 1) {
            counter++; 
        } else {
            counter = 0; 
        }
        src.setAttribute("src", musicList[counter].src);
        title.innerHTML = musicList[counter].name;
        artist.innerHTML = musicList[counter].artist;
        coverArt.setAttribute("src",musicList[counter].img)
    
        song.load();
        song.play();
    
        ctrl.classList.add("fa-pause");
        ctrl.classList.remove("fa-play");
    }
    else{
        counter=shuffleIndex()
        src.setAttribute("src", musicList[counter].src);
        title.innerHTML = musicList[counter].name;
        artist.innerHTML = musicList[counter].artist;
        coverArt.setAttribute("src",musicList[counter].img)
    
        song.load();
        song.play();
    
        ctrl.classList.add("fa-pause");
        ctrl.classList.remove("fa-play");
    }
});

function fillQueue() {
    songListContainer.innerHTML = ""; 

    musicList.forEach((track, index) => {
        const songDiv = document.createElement("div");
        songDiv.classList.add("song-item");

        songDiv.innerHTML = `
            <div class="song-details">
                <h3 class="song-name">${track.name}</h3>
                <p class="song-artist">${track.artist}</p>
            </div>
            <hr>
        `;

        // Add click listener to play the song
        songDiv.addEventListener("click", () => {
            // Update the audio source
            src.setAttribute("src", track.src);
            // Update the UI with the song details
            title.innerHTML = track.name;
            artist.innerHTML = track.artist;
            coverArt.setAttribute("src", track.img); // Update the cover image

            // Load and play the new song
            song.currentTime = 0;
            progress.value = 0;
            song.load(); // Ensure the audio element reloads the new song
            song.play(); // Start playback of the new song

            myModal.style.display = "none";
            ctrl.classList.add("fa-pause");
            ctrl.classList.remove("fa-play");

            
            
        });

        songListContainer.appendChild(songDiv); // Append song to the container
    });
}


 openQueue.addEventListener("click",()=>{
    fillQueue()
    myModal.style.display="block"
 })
 closeQueue.addEventListener("click",()=>{
    myModal.style.display="none"
 })
 window.onclick = function(event) {
    if (event.target == myModal) {
      myModal.style.display = "none";
    }
  }

 song.onloadedmetadata=function(){
     progress.max=song.duration
     progress.value=song.currentTime 
}
playPause.addEventListener("click",()=>{
    if(ctrl.classList.contains("fa-pause")){
        song.pause()
        ctrl.classList.remove("fa-pause")
        ctrl.classList.add("fa-play")
    }
    else{
        song.play()
        ctrl.classList.add("fa-pause")
        ctrl.classList.remove("fa-play")
    }
     
}) 
song.addEventListener("timeupdate", () => {
    progress.value = song.currentTime;
});
progress.oninput = function () {
    song.currentTime = progress.value;
};
progress.onchange=function(){
    song.play()
    song.currentTime=progress.value
    ctrl.classList.add("fa-pause")
    ctrl.classList.remove("fa-play")
    console.log(progress.value)
}

back.addEventListener("click", () => {
    if (progress.value >= 5) {
        song.currentTime = 0;
        progress.value = 0;
    } else {
        if (shuffle.classList.contains("active")) {
            counter = shuffleIndex();
        } else {
            if (counter > 0) {
                counter--;
            } else {
                counter = musicList.length - 1;
            }
        }

        src.setAttribute("src", musicList[counter].src);
        title.innerHTML = musicList[counter].name;
        artist.innerHTML = musicList[counter].artist;
        coverArt.setAttribute("src",musicList[counter].img)


        song.load();
        song.play();

        ctrl.classList.add("fa-pause");
        ctrl.classList.remove("fa-play");
    }
});


shuffle.addEventListener("click",()=>{
    if(shuffle.classList.contains("active")){
        shuffle.classList.remove("active")
        shuffle.style.background="#fafad2"
        document.querySelector(".fa-shuffle").style.color="#17640c"
    }
    else{
        shuffle.classList.add("active")
        shuffle.style.background="#17640c"
        document.querySelector(".fa-shuffle").style.color="#fafad2"
    }
})
function shuffleIndex() {
    return Math.floor(Math.random() * musicList.length)
}
