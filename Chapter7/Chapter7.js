document.getElementById("lefteye").style.backgroundColor = "purple";
//made lefteye purple
document.getElementById("head").style.transform = "rotate(15deg)";
//rotated the head 15de
document.getElementById("body").style.border = "2px black solid";
//put a border around the body
document.getElementById("mouth").style.borderRadius = "4px";
//made the edges of the mouth a little bit rounder
document.getElementById("righteye").style.border = "4px yellow dotted";
//put yellow dotted border around the righteye
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
//made the background color of the leftarm purple
document.getElementById("body").style.color = "#FF0000";
//changed the colors of the wording on the body from black to red
document.getElementById("head").style.borderTop = "5px black solid";
//put a black border ontop of the head

let rightEye = document.getElementById("righteye");
let leftEye = document.getElementById("lefteye");
let leftArm = document.getElementById("leftarm");
let nose = document.getElementById("nose");

rightEye.addEventListener("click",moveUpDown); 
leftEye.addEventListener("click",moveUpDown);  
leftArm.addEventListener("click",moveRightLeft);  
nose.addEventListener("click",noseMoveUpDown);                     
                                                                        
function moveUpDown(e) {
    let robotPart = e.target;
    let t = 0;
    let animation = setInterval(frame, 10); //draws every 10ms (eyes)

    function frame() {
        robotPart.style.top = t + "%";
        t++;
        if (t === 20) {
            clearInterval(animation);
        }
    }
}    

function moveRightLeft(e) {
    let robotPart = e.target;
    let l = 0;
    let animation = setInterval(frame, 10); //draws every 10ms (arms)

    function frame() {
        robotPart.style.left = l + "%";
        l++;
        if (l === 71) {
            clearInterval(animation);
        }
    }
} 

function noseMoveUpDown(e) {
    let robotPart = e.target;
    let n = 0;
    let animation = setInterval(frame, 10); //draws every 10ms (nose)

    function frame() {
        robotPart.style.top = n + "%";
        n++;
        if (n === 50) {
            clearInterval(animation);
        }
    }
} 
