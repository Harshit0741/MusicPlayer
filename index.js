console.log("welcome to spotify");

// Initialize the Variables
let songIndex=0;
let audioElement = new Audio('ty.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName:"Kaccha gadha", filePath:"ty.mp3", coverPath:"3.jpg"},
    {songName:"Kaccha gadha", filePath:"ty.mp3", coverPath:"3.jpg"},
    {songName:"Kaccha gadha", filePath:"ty.mp3", coverPath:"3.jpg"},
    {songName:"Kaccha gadha", filePath:"ty.mp3", coverPath:"3.jpg"},
    {songName:"Kaccha gadha", filePath:"ty.mp3", coverPath:"3.jpg"},
    {songName:"Kaccha gadha", filePath:"ty.mp3", coverPath:"3.jpg"},
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
// audioElement.play();

// Handel Play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0
    }
})
// Listens to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays()
        index = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src = 'ty.mp3'
        audioElement.currentTime = 0
        audioElement.play()
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
    })
})