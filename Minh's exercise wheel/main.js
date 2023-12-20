let create = document.querySelector(".create");
let reset = document.querySelector(".reset");
let nameList = document.querySelector(".nameList");
let input = document.querySelector("#name");
let remove = document.querySelector(".remove");
let chart = document.querySelector("#chart");
let audio = new Audio("./assets/music/mixkit-bike-wheel-spinning-1613.wav");
let message = document.querySelector(".message");
let congratulations = document.querySelector(".container");
let clap = document.querySelector(".clap");
let form = document.querySelector(".form");
let cover = document.querySelector(".cover");
let backgroundMusic = document.querySelector(".backgroundMusic");
let soundToggle = document.querySelector(".soundToggle");
let toggleCover = false;
let toggleSound = false;
let currentTime = 0;

let songs = [
  {
    path: "./assets/music/[Official Video] Little Drummer Boy - Pentatonix.mp3",
  },
  {
    path: "./assets/music/ASTN - Last Christmas (Official Visualizer).mp3",
  },
  {
    path: "./assets/music/BABY, IT'S COLD OUTSIDE - MICHAEL BUBLÉ , IDINA MENZEL DUET LYRICS.mp3",
  },
  {
    path: "./assets/music/Ed Sheeran & Elton John - Merry Christmas [Official Video].mp3",
  },
  {
    path: "./assets/music/Justin Bieber - Mistletoe (Official Music Video).mp3",
  },
  {
    path: "./assets/music/Justin Bieber - Only Thing I Ever Get For Christmas (Audio).mp3",
  },
  {
    path: "./assets/music/Kelly Clarkson - Underneath the Tree (Official Audio).mp3",
  },
  {
    path: "./assets/music/Mariah Carey - All I Want for Christmas Is You (Make My Wish Come True Edition).mp3",
  },
  {
    path: "./assets/music/Matthew Ifield - Holly Jolly Christmas.mp3",
  },
  {
    path: "./assets/music/Michael Bublé - It's Beginning To Look A Lot Like Christmas [Official HD Audio].mp3",
  },
];

document.querySelector(".background").scrollIntoView();
var padding = { top: 20, right: 40, bottom: 0, left: 0 },
  w = 500 - padding.left - padding.right,
  h = 500 - padding.top - padding.bottom,
  r = Math.min(w, h) / 2,
  rotation = 0,
  oldrotation = 0,
  picked = 100000,
  oldpick = [],
  color = d3.scale.category20(); //category20c()
//randomNumbers = getRandomNumbers();
//http://osric.com/bingo-card-generator/?title=HTML+and+CSS+BINGO!&words=padding%2Cfont-family%2Ccolor%2Cfont-weight%2Cfont-size%2Cbackground-color%2Cnesting%2Cbottom%2Csans-serif%2Cperiod%2Cpound+sign%2C%EF%B9%A4body%EF%B9%A5%2C%EF%B9%A4ul%EF%B9%A5%2C%EF%B9%A4h1%EF%B9%A5%2Cmargin%2C%3C++%3E%2C{+}%2C%EF%B9%A4p%EF%B9%A5%2C%EF%B9%A4!DOCTYPE+html%EF%B9%A5%2C%EF%B9%A4head%EF%B9%A5%2Ccolon%2C%EF%B9%A4style%EF%B9%A5%2C.html%2CHTML%2CCSS%2CJavaScript%2Cborder&freespace=true&freespaceValue=Web+Design+Master&freespaceRandom=false&width=5&height=5&number=35#results
var data = [
  // {
  //   label: "Dell LAPTOP",
  //   value: 1,
  //   question:
  //     "What CSS property is used for specifying the area between the content and its border?",
  // }, // padding
  // {
  //   label: "IMAC PRO",
  //   value: 2,
  //   question: "What CSS property is used for changing the font?",
  // }, //font-family
  // {
  //   label: "SUZUKI",
  //   value: 3,
  //   question: "What CSS property is used for changing the color of text?",
  // }, //color
  // {
  //   label: "HONDA",
  //   value: 4,
  //   question: "What CSS property is used for changing the boldness of text?",
  // }, //font-weight
  // {
  //   label: "FERRARI",
  //   value: 5,
  //   question: "What CSS property is used for changing the size of text?",
  // }, //font-size
  // {
  //   label: "APARTMENT",
  //   value: 6,
  //   question:
  //     "What CSS property is used for changing the background color of a box?",
  // }, //background-color
  // {
  //   label: "IPAD PRO",
  //   value: 7,
  //   question:
  //     "Which word is used for specifying an HTML tag that is inside another tag?",
  // }, //nesting
  // {
  //   label: "LAND",
  //   value: 8,
  //   question:
  //     "Which side of the box is the third number in: margin:1px 1px 1px 1px; ?",
  // }, //bottom
  // {
  //   label: "MOTOROLLA",
  //   value: 9,
  //   question:
  //     "What are the fonts that don't have serifs at the ends of letters called?",
  // }, //sans-serif
  // {
  //   label: "BMW",
  //   value: 10,
  //   question:
  //     "With CSS selectors, what character prefix should one use to specify a class?",
  // },
];
function renderSpin() {
  d3.select("#chart svg").remove();
  var svg = d3
    .select("#chart")
    .append("svg")
    .data([data])
    .attr("width", w + padding.left + padding.right)
    .attr("height", h + padding.top + padding.bottom);
  var container = svg
    .append("g")
    .attr("class", "chartholder")
    .attr(
      "transform",
      "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")"
    );
  var vis = container.append("g");

  var pie = d3.layout
    .pie()
    .sort(null)
    .value(function (d) {
      return 1;
    });
  // declare an arc generator function
  var arc = d3.svg.arc().outerRadius(r);
  // select paths, use arc generator to draw
  var arcs = vis
    .selectAll("g.slice")
    .data(pie)
    .enter()
    .append("g")
    .attr("class", "slice");

  arcs
    .append("path")
    .attr("fill", function (d, i) {
      return color(i);
    })
    .attr("d", function (d) {
      return arc(d);
    });
  // add the text
  arcs
    .append("text")
    .attr("transform", function (d) {
      d.innerRadius = 0;
      d.outerRadius = r;
      d.angle = (d.startAngle + d.endAngle) / 2;
      return (
        "rotate(" +
        ((d.angle * 180) / Math.PI - 90) +
        ")translate(" +
        (d.outerRadius - 10) +
        ")"
      );
    })
    .attr("text-anchor", "end")
    .style({
      "font-size": "20px",
      "font-weight": "bold",
    })
    .text(function (d, i) {
      return data[i].label;
    });
  console.log(container);
  // container.on("click", spin);

  function spin(d) {
    container.on("click", null);
    audio.play();
    showCover();
    //all slices have been seen, all done
    console.log("OldPick: " + oldpick.length, "Data length: " + data.length);

    // if (oldpick.length == data.length) {
    //   console.log("done");
    //   container.on("click", null);
    //   return;
    // }
    var ps = 360 / data.length,
      pieslice = Math.round(1440 / data.length),
      rng = Math.floor(Math.random() * 1440 + 360);

    rotation = Math.round(rng / ps) * ps;

    picked = Math.round(data.length - (rotation % 360) / ps);
    picked = picked >= data.length ? picked % data.length : picked;
    // if (oldpick.indexOf(picked) !== -1) {
    //   d3.select(this).call(spin);
    //   return;
    // } else {
    //   oldpick.push(picked);
    // }
    rotation += 90 - Math.round(ps / 2);
    vis
      .transition()
      .duration(3000)
      .attrTween("transform", rotTween)
      .each("end", function () {
        // mark question as seen
        // d3.select(".slice:nth-child(" + (picked + 1) + ") path").attr(
        //   "fill",
        //   "#111"
        // );
        //populate question
        // d3.select("#question h1").text(data[picked].question);
        oldrotation = rotation;

        /* Get the result value from object "data" */
        console.log("data removing =====> ", data);
        console.log(data[picked].value);
        var removedIndex = picked;
        const removedItemArr = data.splice(removedIndex, 1);
        winner(removedItemArr[0], removedIndex);
        audio.pause();

        /* Comment the below line for restrict spin to single time */
        container.on("click", null);
      });
  }

  if (data.length > 0) {
    //make arrow
    svg
      .append("g")
      .attr(
        "transform",
        "translate(" +
          (w + padding.left + padding.right) +
          "," +
          (h / 2 + padding.top) +
          ")"
      )
      .append("path")
      .attr("d", "M-" + r * 0.15 + ",0L0," + r * 0.05 + "L0,-" + r * 0.05 + "Z")
      .style({ fill: "black" });
    //draw spin circle
    container
      .append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 60)
      .style({ fill: "white", cursor: "pointer" });
    //spin text
    container
      .append("text")
      .attr("x", 0)
      .attr("y", 15)
      .attr("text-anchor", "middle")
      .text("SPIN")
      .style({ "font-weight": "bold", "font-size": "30px" });
    container.select("circle").on("click", spin);
  } else {
    d3.select("#chart svg").remove();
  }
}

function rotTween(to) {
  var i = d3.interpolate(oldrotation % 360, rotation);
  return function (t) {
    return "rotate(" + i(t) + ")";
  };
}

function getRandomNumbers() {
  var array = new Uint16Array(1000);
  var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
  if (
    window.hasOwnProperty("crypto") &&
    typeof window.crypto.getRandomValues === "function"
  ) {
    window.crypto.getRandomValues(array);
    console.log("works");
  } else {
    //no support for crypto, get crappy random numbers
    for (var i = 0; i < 1000; i++) {
      array[i] = Math.floor(Math.random() * 100000) + 1;
    }
  }
  return array;
}

//render list of name
function render() {
  const htmls = data.map((data, index) => {
    return `<li>
    <h3>${data.label}</h3>
    <button class = 'smallButton' onclick = 'removeName(${index})' >Delete</button>
    </li>
    `;
  });
  nameList.innerHTML = htmls.join("");
}

//Click event on 'Nhập' button
create.onclick = function () {
  let text = input.value;
  if (text !== "") {
    data.push({ label: text, value: data.length + 1 });
    render();
    console.log(data);
    renderSpin();
    input.value = "";
  }
};

//Click event on 'reset' button
reset.onclick = function () {
  data = [];
  render();
  renderSpin();
};

//Use 'Enter' keyboard to create name
input.onkeydown = function (event) {
  let text = input.value;
  if (event.key === "Enter" && text !== "") {
    data.push({ label: text, value: data.length + 1 });
    render();
    console.log(data);
    renderSpin();
    input.value = "";
  }
};

//Remove name function
function removeName(i) {
  data.splice(i, 1);
  render();
  renderSpin();
}

//show the winner when spin stop
function winner(removedItem, index) {
  clap.play();
  message.innerHTML = `<p>Congratulations ${removedItem.label}. You are the winner! 🎉🎉</p>
  <div class = 'messageBtn'>
    <button class = 'ok'>OK</button>
    <button class = 'cancel'>CANCEL</button>
  </div>
  `;
  message.classList.remove("hideMessage");
  message.classList.add("showMessage");
  congratulations.style.display = "block";

  let ok = document.querySelector(".ok");
  let cancel = document.querySelector(".cancel");

  //Turn off message when click ok
  ok.onclick = function () {
    toggleCover = false;
    cover.style.display = "none";
    message.classList.remove("showMessage");
    message.classList.add("hideMessage");
    renderSpin();
    render();
    congratulations.style.display = "none";
  };

  //Turn off message when click cancel
  cancel.onclick = function () {
    toggleCover = false;
    cover.style.display = "none";
    message.classList.remove("showMessage");
    message.classList.add("hideMessage");
    data.splice(index, 0, removedItem);
    renderSpin();
    render();
    congratulations.style.display = "none";
  };
}

//show list content when click on List button
let showList = document.querySelector(".showList");
let showListItem = false;
showList.onclick = function () {
  showListItem = !showListItem;
  if (showListItem) {
    form.classList.add("showForm");
  } else {
    form.classList.remove("showForm");
  }
};

//function of clicking Spin text and cant click anywhere else
function showCover() {
  toggleCover = !toggleCover;
  if (toggleCover) {
    cover.style.display = "inline-block";
  }
}

//Function random song
let songsArr = [...songs];
function playRandomSong() {
  if (songsArr.length === 0) {
    songsArr = songs;
  }
  let randomIndexSong = Math.floor(Math.random() * songsArr.length);
  backgroundMusic.src = songsArr[randomIndexSong].path;
  return randomIndexSong;
}
playRandomSong();

//Turn music on and off
soundToggle.onclick = function () {
  toggleSound = !toggleSound;
  if (toggleSound) {
    soundToggle.innerHTML = "";
    soundToggle.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
    backgroundMusic.play();
  } else {
    soundToggle.innerHTML = "";
    soundToggle.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
    backgroundMusic.pause();
  }
  console.log(toggleSound);
};

//play next random song when it finish the previous song
backgroundMusic.onended = function (randomIndexSong) {
  songsArr.splice(randomIndexSong, 1);
  playRandomSong();
  backgroundMusic.play();
  console.log(songsArr);
};
//Animation snow flakes
document.addEventListener("DOMContentLoaded", function () {
  const snowContainer = document.querySelector(".snow-container");

  const particlesPerThousandPixels = 0.1;
  const fallSpeed = 1.25;
  const pauseWhenNotActive = true;
  const maxSnowflakes = 200;
  const snowflakes = [];

  let snowflakeInterval;
  let isTabActive = true;

  function resetSnowflake(snowflake) {
    const size = Math.random() * 5 + 1;
    const viewportWidth = window.innerWidth - size; // Adjust for snowflake size
    const viewportHeight = window.innerHeight;

    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * viewportWidth}px`; // Constrain within viewport width
    snowflake.style.top = `-${size}px`;

    const animationDuration = (Math.random() * 3 + 2) / fallSpeed;
    snowflake.style.animationDuration = `${animationDuration}s`;
    snowflake.style.animationTimingFunction = "linear";
    snowflake.style.animationName =
      Math.random() < 0.5 ? "fall" : "diagonal-fall";

    setTimeout(() => {
      if (parseInt(snowflake.style.top, 10) < viewportHeight) {
        resetSnowflake(snowflake);
      } else {
        snowflake.remove(); // Remove when it goes off the bottom edge
      }
    }, animationDuration * 1000);
  }

  function createSnowflake() {
    if (snowflakes.length < maxSnowflakes) {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflakes.push(snowflake);
      snowContainer.appendChild(snowflake);
      resetSnowflake(snowflake);
    }
  }

  function generateSnowflakes() {
    const numberOfParticles =
      Math.ceil((window.innerWidth * window.innerHeight) / 1000) *
      particlesPerThousandPixels;
    const interval = 5000 / numberOfParticles;

    clearInterval(snowflakeInterval);
    snowflakeInterval = setInterval(() => {
      if (isTabActive && snowflakes.length < maxSnowflakes) {
        requestAnimationFrame(createSnowflake);
      }
    }, interval);
  }

  function handleVisibilityChange() {
    if (!pauseWhenNotActive) return;

    isTabActive = !document.hidden;
    if (isTabActive) {
      generateSnowflakes();
    } else {
      clearInterval(snowflakeInterval);
    }
  }

  generateSnowflakes();

  window.addEventListener("resize", () => {
    clearInterval(snowflakeInterval);
    setTimeout(generateSnowflakes, 1000);
  });

  document.addEventListener("visibilitychange", handleVisibilityChange);
});

// Animation congratulations
function showCongratulation() {
  const Confettiful = function (el) {
    this.el = el;
    this.containerEl = null;

    this.confettiFrequency = 3;
    this.confettiColors = [
      "#EF2964",
      "#00C09D",
      "#2D87B0",
      "#48485E",
      "#EFFF1D",
    ];
    this.confettiAnimations = ["slow", "medium", "fast"];

    this._setupElements();
    this._renderConfetti();
  };

  Confettiful.prototype._setupElements = function () {
    const containerEl = document.createElement("div");
    const elPosition = this.el.style.position;

    if (elPosition !== "relative" || elPosition !== "absolute") {
      this.el.style.position = "relative";
    }

    containerEl.classList.add("confetti-container");

    this.el.appendChild(containerEl);

    this.containerEl = containerEl;
  };

  Confettiful.prototype._renderConfetti = function () {
    this.confettiInterval = setInterval(() => {
      const confettiEl = document.createElement("div");
      const confettiSize = Math.floor(Math.random() * 3) + 7 + "px";
      const confettiBackground =
        this.confettiColors[
          Math.floor(Math.random() * this.confettiColors.length)
        ];
      const confettiLeft =
        Math.floor(Math.random() * this.el.offsetWidth) + "px";
      const confettiAnimation =
        this.confettiAnimations[
          Math.floor(Math.random() * this.confettiAnimations.length)
        ];

      confettiEl.classList.add(
        "confetti",
        "confetti--animation-" + confettiAnimation
      );
      confettiEl.style.left = confettiLeft;
      confettiEl.style.width = confettiSize;
      confettiEl.style.height = confettiSize;
      confettiEl.style.backgroundColor = confettiBackground;

      confettiEl.removeTimeout = setTimeout(function () {
        confettiEl.parentNode.removeChild(confettiEl);
      }, 3000);

      this.containerEl.appendChild(confettiEl);
    }, 25);
  };

  window.confettiful = new Confettiful(document.querySelector(".js-container"));
}
showCongratulation();
