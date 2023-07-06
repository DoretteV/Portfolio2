// let myDay = prompt("Which is your favorite day of the week?").toLowerCase();
// let theResponse;

// switch (myDay) {
//     case "monday":
//         theResponse = "Ack!";
//         break;
//     case "tuesday":
//         theResponse = "Taco day!";
//         break;
//     case "wednesday":
//         theResponse = "Halfway there!";
//         break
//     case "thursday":
//         theResponse = "It's the new Friday!";
//         break;
//     case "friday":
//         theResponse = "TGIF! Yeah!";
//         break;
//     case "saturday":
//         theResponse = "Braai Day!";
//         break;
//     case "sunday":
//         theResponse = "Home cooked meals!";
//         break;
//     default:
//         theResponse = "Don't know this day!"
//         break;
// }
// alert (theResponse);

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getDate());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// myDate.setDate(15);                         //change the date to the 15th
// console.log(myDate);

let todayDate = document.getElementById("todaysdate");
let todoButton = document.getElementById("whattodo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// create a new Date object
let d = new Date();
// d.setDate(28);                                      //this changes the day to the 28th
// d.setFullYear(2020);                                //this changes the year to 2020

// call the displayDate() function
displayDate();

function displayDate() {
  // todo: display the current date in the todaysdate div
  todayDate.innerHTML = d;
}

function displayActivity() {
  // todo: find out the day of the week.
  let toDo;
  switch (d.getDay()) {
    case 1:
      toDo = "eat salad";
      break;
    case 2:
      toDo = "eat pasta";
      break;
    case 3:
      toDo = "eat chicken";
      break;
    case 4:
      toDo = "eat cereals";
      break;
    case 5:
      toDo = "eat pizza";
      break;
    case 6:
      toDo = "eat braaivleis";
      break;
    case 7:
      toDo = "eat home cooked meal";
      break;
    default:
      toDo = "Don't know this day!";
      break;
  }

  document.getElementById("thingToDo").innerHTML = toDo;

  /* todo: set a variable, called youShould, with a different
       string based on what day of the week it is. */

  // todo: output the value of youShould into the thingToDo div
}
