// let language = prompt("What language do you speak?").toLowerCase();             //convert to lowercase
// let speaksJavascript;

// if(language === "javascript") {
//     alert("Great, lets speak javascript!");
//     speaksJavascript = true;
// } else {
//     alert("I don't know that language!");
// }

// if (speaksJavascript) {
//     alert("Great to meet you");
// }

//pizza delivery
//if your order is more than 10dollars, you're living in the town and its you bday = delivery is free otherwise its 5dollars

// listen for button clicks
document.getElementById("placeOrder").addEventListener("click", placeOrder);

/**
 * gets form values
 * calculates prices
 * produces output
 */
function placeOrder() {
    // get form values
    let numPizzas = document.getElementById("numPizzas").value;
    let typePizza = document.getElementById("typePizza").value;
    let deliveryCity = document.getElementById("deliveryCity").value;
    let birthday = document.getElementById("birthday").value;

    // get the pizza price
    let orderPrice = calculatePrice(numPizzas, typePizza);

    // get the delivery price
    let deliveryPrice = calculateDelivery(orderPrice, deliveryCity, birthday);

    // create the output
    let theOutput = "<p>Thank you for your order.</p>";

    // todo: output the delivery price, if there is one

    if (deliveryPrice === 0) {
        theOutput += "<p>You get free delivery!</p>";
    } else {
        theOutput += "<p>Your delilvery cost is: $" + deliveryPrice;
    }

    theOutput += "<p>Your total is: $" + (orderPrice + deliveryPrice);

    // display the output
    document.getElementById("displayTotal").innerHTML = theOutput;
}

/**
 * calculates pizza price
 */
function calculatePrice(numPizzas, typePizza) {
    var orderPrice = Number(numPizzas) * 10;
    var extraCharge = 0;
    
    // todo: calculate extraCharge, if there is one.
    if (typePizza === "supreme") {
        extraCharge = Number(numPizzas) * 2;
    }

    orderPrice += extraCharge;
    return orderPrice;
}

/**
 * calculates delivery price
 */
function calculateDelivery(orderPrice, deliveryCity, birthday) {
    var deliveryPrice = 0;
    
    // todo: calculate delivery price, if there is one

    if (((deliveryCity === "Anytown") && (orderPrice > 10)) || 
            (birthday === "yes")) {
        deliveryPrice = 0;
    } else {
        deliveryPrice = 5;
    }
    
    return deliveryPrice;
}