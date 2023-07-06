//while loop will continue as long as its conditions are met
//it will continue to loop until its done.

// let i = 0;
// while (i < 500) {
//     console.log(i + ": Hello, JavaScript!");
//     i++;
// }

//count down using while loop

// let count = 10;
// while (count > 0) {
//     alert(count);
//     count--;
// }
// alert("Blast Off!");

//looping through an array with while loop

// let people = ["Deborah", "Carla", "Mary", "Suzen"];
// let i = 0;
// while (people[i]) {
//     alert(people[i]);
//     i++;
// }

//Lunch Game

// declare globals
let money = 20;
let lunches = 0;

//display lunch budget
document.getElementById("money").innerHTML = money;

//listen for order
document.getElementById("placeOrder").addEventListener("click", buyLunches);

/*
buys specified number of sandwiches per day at current prices
*/
function buyLunches() {
  /*
    todo: 
     * reset the form */
  resetForm();
  let day = 0;

  /* start a loop*/
  while (money > 0) {
    /* get daily sandwich order*/
    let priceToday = getSandwichPrice();
    let numberOfSandwiches = document.getElementById("numSandwiches").value;

    /* calculate total price*/
    let totalPrice = numberOfSandwiches * priceToday;

    /* figure out if there's enough money*/
    if (money >= totalPrice) {
      money = money - totalPrice;
      day++;

      /* if so: subtract money, increment number of lunches, and start loop over*/
      lunches++;
      document.getElementById("receipt").innerHTML +=
        "<p>On day " +
        day +
        ", sandwiches are: $" +
        priceToday +
        ".  You have $" +
        money.toFixed(2) +
        " left.</P>";

      /* if not: display 'out of money' message*/
    } else {
      document.getElementById("receipt").innerHTML +=
        "<p>Today, sandwiches are: $" +
        priceToday +
        ". You don't have enough money. Maybe your sister will give you some of her sandwich.</p>";
      money = 0;
    }
  }

  /* display total lunches after loop exits
   */
  document.getElementById("receipt").innerHTML +=
    "<p>You bought " + lunches + " lunches this week.</p>";
}

/*
gets the current price of sandwiches
*/
function getSandwichPrice() {
  let sandwichPrice = (Math.random() * (5 - 1) + 1).toFixed(2);
  return sandwichPrice;
}

/*
resets the game so that a new order can be placed
*/
function resetForm() {
  money = 20;
  lunches = 0;
  document.getElementById("receipt").innerHTML = "";
}
