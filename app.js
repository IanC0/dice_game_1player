const button = document.getElementById("button");
let scoreText = document.getElementById("scoreText");
const buttonReset = document.getElementById("buttonReset")
let scoreCount = 0;

const [dot1, dot2, dot3, dot4, dot5, dot6, dot7, dot8, dot9] = [
    document.getElementById("dot1"),
    document.getElementById("dot2"),
    document.getElementById("dot3"),
    document.getElementById("dot4"),
    document.getElementById("dot5"),
    document.getElementById("dot6"),
    document.getElementById("dot7"),
    document.getElementById("dot8"),
    document.getElementById("dot9")]



button.addEventListener('click', ()=>{
    let number = Math.floor(Math.random() * 6) + 1;
    console.log(number);
    scoreCount += number;
    diceRollFunction(number);
    if (number == 1) {
        console.log(number);
        scoreText.innerHTML = "Your score is 1, you lose!";
        button.style.visibility = "hidden";
        console.log(scoreText);
    } else if (scoreCount > 20) {
        scoreText.innerHTML = `Your score is ${scoreCount}, you win!`;
        arr.forEach((e) => {
        e.style.backgroundColor = "transparent";
        scoreCount = 0;
        });
        button.style.visibility = "hidden";
    } else {
        scoreText.innerHTML = `Your score is ${scoreCount}`;
    }
})
buttonReset.addEventListener("click", () => {
    scoreCount = 0;
    scoreText.innerHTML = `Your score is ${scoreCount}`;
    button.style.visibility = "visible";
    arr.forEach((e) => {e.style.backgroundColor = "transparent";})
})

let arr = [dot1, dot2, dot3, dot4, dot5, dot6, dot7, dot8, dot9];

const diceRollFunction= function(param) {
    switch(param){
        case 1:
            arr.forEach((e) => {e.style.backgroundColor = "transparent";
            [arr[4]].forEach((e) => {e.style.backgroundColor = "#ee9b00"});
            });
        break;
        case 2:
            arr.forEach((e) => {e.style.backgroundColor = "transparent";
            [arr[0], arr[8]].forEach((e) => {e.style.backgroundColor = "#ee9b00"});
            });
        break;
        case 3:
            arr.forEach((e) => {e.style.backgroundColor = "transparent";
            [arr[0], arr[4], arr[8]].forEach((e) => {e.style.backgroundColor = "#ee9b00"});
            });
        break;
        case 4:
            arr.forEach((e) => {e.style.backgroundColor = "transparent";
            [arr[0], arr[2], arr[6], arr[8]].forEach((e) => {e.style.backgroundColor = "#ee9b00"});
            });
        break;
        case 5:
            arr.forEach((e) => {e.style.backgroundColor = "transparent";
            [arr[0], arr[2], arr[4], arr[6], arr[8]].forEach((e) => {e.style.backgroundColor = "#ee9b00"});
            });
        break;
        case 6:
            arr.forEach((e) => {e.style.backgroundColor = "transparent";
            [arr[0], arr[1], arr[2], arr[6], arr[7],arr[8]].forEach((e) => {e.style.backgroundColor = "#ee9b00"});
            });
        break;
    }
}