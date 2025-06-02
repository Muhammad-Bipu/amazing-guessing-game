// initializing some value
let  totalAttempts = 5;
let attempts = 0;
let totalWon = 0;
let totalLost = 0;

// finding elements
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");
const lostWonMessage = document.createElement("p");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let guessNumber = Number(guessingNumber.value);
    checkResult(guessNumber);
    attempts++;
    remainingAttempts.innerHTML = `Remaining attempts: ${totalAttempts - attempts}`
    if(attempts >= 5){
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }
    guessingNumber.value = "";
});

function checkResult(value){
    console.log(value);
    const randomNumber = getRandomNumber(5);
    console.log(randomNumber);

    if(value === randomNumber){
        resultText.innerHTML = `You have won.`;
        totalWon++;
    }else{
        resultText.innerHTML = `You have lost, random number was ${randomNumber}.`;
        totalLost++;
    }
    lostWonMessage.innerHTML = `Won: ${totalWon}, lost: ${totalLost}`;
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage);
}

function getRandomNumber(limit){
    return Math.floor(Math.random() * limit) + 1;
}