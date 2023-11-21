// Cách đặt biến
// var fullName = "Hoang Tai Thang";
// var age = 23;
// alert(fullName);
// alert(age);

//Hàm built-in
//Hàm console.log
// var fullName = "Hoang Tai Thang";
// console.log(fullName);

//Hàm confirm
// confirm("Xác nhận bạn đủ tuổi!");

//Hàm prompt
// prompt("Xác nhận bạn đủ tuổi!");

//Hàm setTimeOut
// setTimeout(function () {
//   alert("Thong bao");
// }, 3000);

//Hàm setInterval
// setInterval(function () {
//   console.log("DAY la dog" + Math.random());
// }, 1000);

//Toán tử
//Toán tử số học
// var a = 1 + 2;
// console.log(a);

//Toán tử gán
// var fullName = "Hoang Tai Thang";

//Toán tử so sánh
// var a = 1;
// var b = 2;
// if (a < b) {
//   alert("Dung");
// }

//Toán tử logic
// var a = 1;
// var b = 2;
// if (a > 0 && b > 0) {
//   alert("a & b lon hon 0");
// }

//Tạo hàm
//Declaration function
// function showMessage() {}
// var showMessage2 = function () {};

//Number
// function isNumber(value) {
//   return Number.isInteger(value);
// }
// console.log(isNumber(999));
// console.log(isNumber("abc"));

// function isNumber(value) {
//   if (typeof value === "number" && !isNaN(value)) {
//     return true;
//   } else {
//     return true;
//   }
// }

// console.log(isNumber(100 / "abc"));
// Viết hàm tại đây

//Dùng reduce lấy tổng số gold
// var sports = [
//   {
//     name: "Bơi lội",
//     gold: 11,
//   },
//   {
//     name: "Boxing",
//     gold: 3,
//   },
//   {
//     name: "Đạp xe",
//     gold: 4,
//   },
//   {
//     name: "Đấu kiếm",
//     gold: 5,
//   },
// ];

// function getTotalGold(array) {
//   var newArray = array.reduce((a, b) => (a += b.gold), 0);
//   return newArray;
// }

// console.log(getTotalGold(sports)); // Output: 23

//Dùng reduce để flat mảng
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
// var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
//   return flatOutput.concat(depthItem);
// }, []);

// //Lấy ra các khoá học đưa vào 1 mảng mới
// var topics = [
//   {
//     topic: "Front-end",
//     courses: [
//       {
//         id: 1,
//         title: "HTML,CSS",
//       },
//       {
//         id: 2,
//         title: "Javascript",
//       },
//     ],
//   },
//   {
//     topic: "Back-end",
//     courses: [
//       {
//         id: 1,
//         title: "PHP",
//       },
//       {
//         id: 2,
//         title: "Nodejs",
//       },
//     ],
//   },
// ];

// var newTopics = topics.reduce(
//   (newArray, currentTopic) =>
//     newArray.concat(currentTopic.courses.map((course) => course.title)),
//   []
// );
// console.log(newTopics);

//Cho trước danh sách một số bộ phim, hãy viết hàm calculateRating để tính điểm trung bình IMDB của những bộ phim mà Christopher Nolan làm đạo diễn.
var watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
  },
];

function calculateRating(array) {
  var movieLength = array.filter(
    (movie) => movie.Director === "Christopher Nolan"
  ).length;

  var avarageIMDB =
    array
      .filter((movie) => movie.Director === "Christopher Nolan")
      .reduce(
        (total, currentRating) =>
          (total += parseFloat(currentRating.imdbRating)),
        0
      ) / movieLength;

  return avarageIMDB;
}

// Expected results
console.log(calculateRating(watchList)); // Output: 8.675
