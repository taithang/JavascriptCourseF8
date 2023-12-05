let songs = [
  {
    name: "Keep You Safe",
    singer: "Yahya",
    path: "./assets/music/[Vietsub + Lyrics] Keep you safe - Yahya.mp3",
    image: "./assets/img/keepyousafe.jpg",
  },
  {
    name: "Strawberries And Cigarettes",
    singer: "Troy Sivan",
    path: "./assets/music/Strawberries & Cigarettes.mp3",
    image: "./assets/img/strawberriesandcigarettes.jpg",
  },
  {
    name: "Happier Than Ever",
    singer: "ASTN",
    path: "./assets/music/billie eillish - happier than ever (ASTN cover).mp3",
    image:
      "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg",
  },
  {
    name: "Blue Butterflies",
    singer: "JHIN",
    path: "./assets/music/Blue Butterflies.mp3",
    image: "./assets/img/bluebutterflies.jpg",
  },
  {
    name: "Cherry Wine",
    singer: "Grentperez",
    path: "./assets/music/grentperez - Cherry Wine (Official Lyric Video).mp3",
    image: "./assets/img/cherrywines.jpg",
  },
  {
    name: "Nothing",
    singer: "Jeremy Passion",
    path: "./assets/music/Jeremy Passion - Nothing.mp3",
    image: "./assets/img/nothing.jpg",
  },
  {
    name: "Unaware",
    singer: "Jesse Barrera x Albert Posiss",
    path: "./assets/music/Jesse Barrera & Albert Posis -Unaware- (Official Music Video).mp3",
    image: "./assets/img/unaware.jpg",
  },
  {
    name: "Loving You Girl",
    singer: "Peder Elias",
    path: "./assets/music/Peder Elias - Loving You Girl (Lyric Video) ft. Hkeem.mp3",
    image: "./assets/img/lovingyougirl.jpg",
  },
  {
    name: "My Stargirl",
    singer: "Slchld",
    path: "./assets/music/slchld - my stargirl (Official Audio).mp3",
    image: "./assets/img/mystargirl.jpg",
  },
  {
    name: "To All Of You",
    singer: "Mingginyu",
    path: "./assets/music/Vietsub  To All Of You by Mingginyu (Baemin Live Ver.).mp3",
    image: "./assets/img/toallofyou.jpg",
  },
];

let songsList = document.querySelector(".songs-list");
let audio = document.querySelector(".audio");
let play = document.querySelector(".button");

var playedSongs = [...songs];
function playRandomSong() {
  const randomIndex = Math.floor(Math.random() * playedSongs.length);
  audio.src = playedSongs[randomIndex].path;
  audio.play();
  playedSongs.splice(randomIndex, 1);
  console.log(playedSongs);
}

play.onclick = function () {
  if (playedSongs.length > 0) {
    playRandomSong();
  }
  if (playedSongs.length === 0) {
    playedSongs = [...songs];
  }
};

audio.onended = function () {
  playRandomSong();
};

// const indexArray = [];
// const playedSongs = [...songs];
// function playRandomSong() {
//   let randomIndex = Math.floor(Math.random() * playedSongs.length);
//   console.log("randomIndex:", randomIndex);
//   if (!indexArray.includes(randomIndex)) {
//     indexArray.push(randomIndex);
//     audio.src = playedSongs[indexArray[indexArray.length - 1]].path;
//     audio.play();
//   } else {
//     playRandomSong();
//   }
// }

// play.onclick = function () {
//   playRandomSong();
// };

// audio.ended = function () {
//   playRandomSong();
// };
