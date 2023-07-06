//creating a dreamCar object

let dreamCar = {
    make: "Ford",
    model: "Mustang",
    color: "blue",
    year: 2023, 
    bodyStyle: "Sport Car",
    price: 800000
}
alert("The type of dreamCar is: " + typeof dreamCar);

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;

let car = document.getElementById("car");

car.addEventListener("click",moveRightLeft);

function moveRightLeft(e) {
    let carPart = e.target;
    let l = 0;
    let animation = setInterval(frame, 10); //draws every 10ms (arms)

    function frame() {
        carPart.style.left = l + "%";
        l++;
        if (l === 1) {
            clearInterval(animation);
        }
    }
} 

