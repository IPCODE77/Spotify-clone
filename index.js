console.log('spotify colne');

let musicplayer=document.querySelector("audio");
let playbtn=document.getElementById("playing");
let allsong=document.getElementById("itembox");
let title=document.getElementById("title");
let artist=document.getElementById("artist");
let picture=document.getElementById("picture");
let previous=document.getElementById("previous");
let next=document.getElementById("next");
let starttime=document.getElementById("startingtime");
let totaltime=document.getElementById("duration");
let progress=document.getElementById("progressbarbox");
let progresssitem=document.getElementById("progress");
let song=document.getElementsByClassName("song");
console.log(song);

playbtn.addEventListener("click",()=>{


    if(musicplayer.paused || musicplayer.currentTime<=0){
        musicplayer.play();
        console.log('playing');
        playbtn.classList.add("fa-circle-pause");
        playbtn.classList.remove("fa-circle-play");
    }

    else{
        musicplayer.pause();
        playbtn.classList.remove("fa-circle-pause");
        playbtn.classList.add("fa-circle-play");
    }    
})

let songdata = [
    {
        name: "song1",
        title: "Kina chir x aadat",
        artist: "jalraj",
        src: "songs/1.mp3",
        img: "cover/1.jpg",
        id:1
    },
    {
        name: "song2",
        title: "heat waves",
        artist: "iann dior",
        src: "songs/2.mp3",
        img: "cover/2.webp"
    },
    {
        name: "song3",
        title: "Dekha Tenu Pehli Pehli Baar",
        artist: "Deep joshi",
        src: "songs/3.mp3",
        img: "cover/3.jpg"
    },

    {
        name: "song4",
        title: "Tera Mera Rishta Lofi",
        artist: "mustafa zahid",
        src: "songs/4.mp3",
        img: "cover/4.jpg"
    },

    {
        name: "song5",
        title: "Zara Sa X Hale Dil Lofi",
        artist: "nidhi hegde",
        src: "songs/5.mp3",
        img: "cover/5.jpg"
    },

    {
        name: "song6",
        title: "Safari",
        artist: "Serena",
        src: "songs/6.mp3",
        img: "cover/6.jpeg "
    }
    ,
    {
        name: "song7",
        title: "You Need Me",
        artist: "Ed Sheeran",
        src: "songs/7.mp3",
        img: "cover/7.jpg "
    },
    {
        name: "song8",
        title: "Parbona-Lofi",
        artist: "Arijit Singh",
        src: "songs/8.mp3",
        img: "cover/8.jpg "
    },
    {
        name: "song9",
        title: "Harleys In Hawaii",
        artist: "Katy perry",
        src: "songs/9.mp3",
        img: "cover/9.png "
    },
    {
        name: "song9",
        title: "Harleys In Hawaii",
        // artist: "Unknown",
        src: "songs/9.mp3",
        img: "cover/9.png "
    },
]

console.log(songdata);
let newlist="";
Array.from(songdata).forEach((element)=>{
    // console.log(element);
    
    let list='';
    list=`<div class="songitem">
    <h2 id="songname">${element["title"]}</h2>
    <h3 id="singername">${element["artist"]}</h3>
    <span  class="song">
                    <span> <i  class="far fa-2x fa-circle-play songitemplay" ></i> </span>
                </span>
</div>`
newlist+=list;
})
allsong.innerHTML=newlist;
let songindex=0; 

const loadsong=(songdata)=>{
    title.textContent=songdata.title.toLocaleUpperCase();
    artist.textContent=songdata.artist.toLocaleUpperCase();
    musicplayer.src=songdata.src;
    picture.src=songdata.img;
}

loadsong(songdata[songindex]);
const backsong=()=>{
    console.log('back');
    songindex = (songindex - 1 + songdata.length) % songdata.length
    loadsong(songdata[songindex]);
    musicplayer.play();
    playbtn.classList.remove("fa-circle-play");
    playbtn.classList.add("fa-circle-pause");
    
}

const nextsong=()=>{
    songindex = (songindex+1)%songdata.length
    loadsong(songdata[songindex]);
    musicplayer.play();
    playbtn.classList.remove("fa-circle-play");
    playbtn.classList.add("fa-circle-pause");
    
}
previous.addEventListener("click",backsong);
next.addEventListener("click",nextsong);

musicplayer.addEventListener("timeupdate",(event)=>{
console.log('event fired');
const {currentTime,duration}=event.srcElement;
    // console.log(event);
    let progressbarvalue=(currentTime/duration)*100;
    progresssitem.style.width=`${progressbarvalue}%`;
    // console.log(currentTime);
    // console.log(duration);
    let min_duration=Math.floor(duration/60);
    let sec_duration=Math.floor(duration%60);
    if(duration){
        totaltime.textContent=`${min_duration}:${sec_duration}`
    }
    else{
        totaltime.textContent="0.0";
    }
    let min_currenttime=Math.floor(currentTime/60);
    let sec_currentime=Math.floor(currentTime%60);
    if(currentTime){
        if(sec_currentime<10){
            starttime.textContent=`${min_currenttime}:0${sec_currentime}`;
        }
        else{
            starttime.textContent=`${min_currenttime}:${sec_currentime}`;

        }
    }
    else{
        starttime.textContent="0.0";
    }
    if(currentTime==duration){
        nextsong();
    }
})

progress.addEventListener("click",(event)=>{
// console.log('click');
let {duration}=musicplayer;
console.log(event);
let value=(event.offsetX/event.srcElement.clientWidth)*duration
console.log(value);

musicplayer.currentTime=value


    
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

// Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
//     element.addEventListener("click",(e)=>{
//         makeAllPlays();
//         // songindex=parseInt(e.target.id)
//         console.log(e.target.id);
        
//         console.log(songindex);
//         e.target.classList.remove("fa-circle-play");
//         e.target.classList.add("fa-circle-pause");
//         musicplayer.src=`songs/${songindex+1}.mp3`;
//         title.innerText=songdata[songindex].title;

//         musicplayer.currentTime=0;
//         musicplayer.play();
//         playbtn.classList.add("fa-circle-pause");
//         playbtn.classList.remove("fa-circle-play");

//     })
// })
Array.from(document.getElementsByClassName("songitemplay")).forEach((element,index)=>{
    console.log(element,index);
    element.addEventListener("click",()=>{
        makeAllPlays();
        console.log('correct',index,element);
                 element.classList.remove("fa-circle-play");
                element.classList.add("fa-circle-pause");
                musicplayer.src=`songs/${index+1}.mp3`;
                title.innerText=songdata[index].title.toLocaleUpperCase();
                artist.textContent=songdata[index].artist.toLocaleUpperCase();
                // musicplayer.src=songdata.src;
                picture.src=songdata[index].img;
                musicplayer.currentTime=0;
                musicplayer.play();
                playbtn.classList.add("fa-circle-pause");
                playbtn.classList.remove("fa-circle-play");
        
        
    })
    
})