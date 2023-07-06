// let dresser = ["socks", "shirts", "pants"];
// alert(dresser[2]);

// let firstName = "Dorette";
// let middleName = "Estie";
// let lastName = "Schutte"
// let scientist = [firstName, middleName, lastName];
// console.log(scientist);

// let people = ["Teddy", "Cathy", "Bobby"];
// console.log(people);
// people[0] = "Georgie";
// console.log(people);
// people[0] = "Mary";
// people[1] = "Bobby";
// people[2] = "Judy";
// people[3] = "Eddie";
// people[4] = "Herbie";
// people[5] = "Tony";
// console.log(people);

let people = ["Pierre", "Eben", "Estelle", "Hein", "Stefan", "Maryke"];
let otherPeople = ["Dirk", "Mommy", "Dad", "Kathy"];

// people = people.concat(otherPeople);
// people = people.indexOf("Estelle");
// people = people.join(" # ");
// people = people.lastIndexOf("Maryke");
// people = people.pop();                              //removes last element in an array
// people.pop();
// people = people.push("Rynhardt");                       //result show the new length of array
// people.push("Rynhardt");                                //Rynhardt is added at the end
// people = people.reverse();                              //flips your array over
// people.shift();                                         //removes the first name in the array
// people.unshift("Rynhardt");                             //adds Rynhardt to the front of the array
// people = people.slice(0,2);                              //only shows the names thats sliced (0,2)
// people = people.sort();                                 //sort the array alphabetically
people.splice(1, 0, "Matthew");              //insert the value after the first element and dont remove any element(thats what the 0 means)



// document.getElementById("peopleIKnow").innerHTML = people.toString();
document.getElementById("peopleIKnow").innerHTML = people.valueOf();




