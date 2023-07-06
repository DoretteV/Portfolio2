// for loop
//prints out javascript 500 times

// for (let counter = 0; counter < 500; counter++) {
//     console.log(counter + ": Hello, JavaScript!");
// }

// for (let i = 10; i > 0; i--) {                      //counts down from 10 to 1 and then alert blast off
//     alert(i);
// }
// alert("Blast Off!");

//using for loops to loop through an array

// let myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];
// for (let i = 0; i < myFriends.length; i++) {
//     alert(myFriends[i] + " is my friend.");
// }

//getting ramdom number

// alert(Math.random() * 11);

//selecting random words from an array

// let myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];
// let randomFriend = Math.floor(Math.random() * myFriends.length);
// alert(myFriends[randomFriend]);

//random weather

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let weather = [
  "Sunny",
  "Partly Sunny",
  "Partly Cloudy",
  "Cloudy",
  "Raining",
  "Snowing",
  "Thunderstorm",
  "Foggy",
];

let minTemp = 0;
let maxTemp = 100;

generateWeather();

function generateWeather() {
  for (let i = 0; i < days.length; i++) {
    let weatherToday = weather[Math.floor(Math.random() * weather.length)];
    let tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
    document.getElementById("5DayWeather").innerHTML +=
      "<div id='" +
      days[i] +
      "' class='" +
      weatherToday +
      "'><b>Forecast for " +
      days[i] +
      ":</b><br><br>" +
      weatherToday +
      " and " +
      tempToday +
      " degrees.</div>";
  }
}
