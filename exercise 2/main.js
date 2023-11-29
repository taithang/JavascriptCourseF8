/**
 * 1. Render songs
 * 2. Scroll top
 * 3. Play / pause / seek
 * 4. CD rotate
 * 5. Next / prev
 * 6. Random
 * 7. Next / Repeated when ends
 * 8. Active song
 * 9. Scroll active song into view
 * 10. Play song when click
 */

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const cd = $(".cd");

const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");

const app = {
  currentIndex: 0,
  songs: [
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
  ],

  render: function () {
    const htmls = this.songs.map((song) => {
      return `
        <div class="song">
          <div
            class="thumb"
            style="
              background-image: url('${song.image}');
            "
          ></div>
          <div class="body">
            <h3 class="title">${song.name}</h3>
            <p class="author">${song.singer}</p>
          </div>
          <div class="option">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
      `;
    });
    $(".playlist").innerHTML = htmls.join("");
  },

  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },

  handleEvents: function () {
    const cdWidth = cd.offsetWidth;
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      console.log(scrollTop);
      const newCdWidth = cdWidth - scrollTop;
      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };
  },

  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },

  start: function () {
    //Định nghĩa các thuộc tính của object
    this.defineProperties();

    //Lắng nghe / xử lý các sự kiện (DOM events)
    this.handleEvents();

    //Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    this.loadCurrentSong();

    //Render playlist
    this.render();
  },
};

app.start();
