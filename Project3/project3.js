// let secret = 7;
// let answer = prompt("Please guess the secret number (1-10)");
// let guess = parseInt(answer);

//   if (answer === "7") {                              //add if statement and alert
//     alert("Correct!");
//   } else {
//     alert("Sorry, incorrect!");
//   }

// while (answer < 7) {                                    //combine line2 & 3 in a while loop with alerts
//   alert("Incorrect, too low");
// }
// if (answer > 7) {
//   alert("Incorrect, too high");
// } else if (answer = 7) {
//   alert("Correct!");
// }

let secret = Math.floor(Math.random()*10+1);
let guess;
while (true) {
  let answer = prompt("Please guess the secret number (1-10)");
  guess = (answer);

  if (guess == secret) {
    console.log("Correct!");
    alert("Correct!");
    break;
  } else if (guess > secret) {
    console.log("Incorrect, too high");
    alert("Incorrect, too high. Please try again");
  } else {
    console.log("Incorrect, too low");
    alert("Incorrect, too low. Please try again");
  }
}
