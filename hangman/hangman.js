//Creating a game called Hangman
//using Pseudocode to create a game
//Pseudocode has loops and conditionals

// let words = [                                               //secret words
//   "javascripts",
//   "monkey",
//   "amazing",
//   "pancake",
// ];

// let word = words[Math.floor(Math.random() * words.length)];  //choosing a random word from words
// let answerArray = [];
// for (let i = 0; i < word.length; i++) {
//   answerArray[i] = "_";
// }
// let remainingLetters = word.length;
// let guess;
// while (remainingLetters > 0) {
//   alert(answerArray.join(" "));
//   guess = prompt("Guess a letter, or click Cancel to stop playing");

//   if (guess === null) {
//     break;
//   } else if (guess.length !== 1) {
//     alert("Please enter a single letter.");
//   } else {                                                              //check to see if they guessed correctly
//     for(let j = 0; j < word.length; j++) {                               //guess = guess.toLowerCase(); - to make it lowercase incase the use capital letters
//         if (word[j] === guess) {
//             answerArray[j] = guess;
//             remainingLetters--;
//         }
//     }
//   }
// }
// if (guess === null) {
//   alert("You quit!");
// }else {
//     alert("Congratulations!");
// }

//exercise #1

// let words = [
//     "bread",
//     "milk",
//     "sugar",
//     "coffee"
// ];

// let word = words[Math.floor(Math.random() * words.length)];
// let answerArray = [];
// for (let i = 0; i < words.length; i++) {
//     answerArray[i] = "_";
// }
// let remainingLetters = word.length;
// let guess;
// while (remainingLetters > 0) {
//     alert(answerArray.join(" "));
//     guess = prompt("Guess a letter, or click Cancel to stop playing");

//     if (guess === null) {
//         break;
//     } else if (guess.length !== 1) {
//         alert("Please enter a single letter");
//     } else {
//         for(let b = 0; b < word.length; b++) {
//             if (word[b] === guess) {
//                 answerArray[b] = guess;
//                 remainingLetters--;
//             }
//         }
//     }
// }
// if (guess === null) {
//     alert("You quit!");
// } else {
//     alert("Excellent work!");
// }

//exercise #2                       //lower case functi1on

// let words = [
//     "bread",
//     "milk",
//     "sugar",
//     "coffee"
// ];

// let word = words[Math.floor(Math.random() * words.length)];
// let answerArray = [];
// for (let i = 0; i < words.length; i++) {
//     answerArray[i] = "_";
// }1
// let remainingLetters = word.length;
// let guess;
// while (remainingLetters > 0) {
//     alert(answerArray.join(" "));
//     guess = prompt("Guess a letter, or click Cancel to stop playing");

//     if (guess === null) {
//         break;
//     } else if (guess.length !== 1) {
//         alert("Please enter a single letter");
//     } else {
//         guess = guess.toLowerCase();
//         for(let b = 0; b < word.length; b++) {
//             if (word[b] === guess) {
//                 answerArray[b] = guess;
//                 remainingLetters--;
//             }
//         }
//     }
// }
// if (guess === null) {
//     alert("You quit!");
// } else {
//     alert("Excellent work!");
// }

//exercise #3 limiting guesses
//here we added a limit to the number of guesses

// let words = [
//     "bread",
//     "milk",
//     "sugar",
//     "coffee"
// ];

// let word = words[Math.floor(Math.random() * words.length)];
// let answerArray = [];
// for (let i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
// }
// let remainingLetters = word.length;
// let guess;
// let remainingGuesses = word.length;
// let numberOfGuesses = word.length;

// while ((remainingLetters > 0) && (remainingGuesses > 0)) {
//     alert(answerArray.join(" "));
//     alert("number of guesses remaining: " + numberOfGuesses);
//     guess = prompt("Guess a letter, or click Cancel to stop playing");

//     if (guess === null) {
//         break;
//     } else if (guess.length !== 1) {
//         alert("Please enter a single letter");
//     } else {
//         guess = guess.toLowerCase();
//         numberOfGuesses--;
//         for(let b = 0; b < word.length; b++) {
//             if (word[b] === guess) {
//                 answerArray[b] = guess;
//                 remainingLetters--;
//             }
//         }
//     }
// }
// if (guess === null) {
//     alert("You quit!");
// } else if(remainingGuesses === 0 && remainingLetters > 0) {
//     alert("You ran out of guesses!")
// } else {
//     alert("Excellent work!");
// }

//exercise #4 fixing a bug
//it will alert if you choose the same letter twice

let words = ["bread", "milk", "sugar", "coffee"];

let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
let remainingLetters = word.length;
let guess;
let remainingGuesses = word.length;

while (remainingLetters > 0 && remainingGuesses > 0) {
  alert(answerArray.join(" "));
  alert("number of guesses remaining: " + remainingGuesses);
  guess = prompt("Guess a letter, or click Cancel to stop playing");

  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter");
  } else {
    guess = guess.toLowerCase();
    remainingGuesses--;
    for (let b = 0; b < word.length; b++) {
      if (word[b] === guess) {
        if (answerArray[b] === "_") {
          answerArray[b] = guess;
          remainingLetters--;
        } else {
          alert("You have already guessed this letter!");
        }
      }
    }
  }
}
if (guess === null) {
  alert("You quit!");
} else if (remainingGuesses === 0 && remainingLetters > 0) {
  alert("You ran out of guesses!");
} else {
  alert("Excellent work!");
}


