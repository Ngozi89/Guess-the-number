// The DOM elements
const input = document.querySelector("input"),
    guess = document.querySelector(".guess"),
    checkButton = document.querySelector("button"),
    remainChances = document.querySelector(".chances");

// Set input field
input.focus();
let randomNum = Math.floor(Math.random() * 100);
chance = 10;

// Add event listener
checkButton.addEventListener("click", () => {

    chance--;
    // Get value from input field
    let inputValue = input.value;

// Check if input value is equal to random number, update the guessed number and disable input
    if (inputValue == randomNum) {
        [guess.textContent, input.disabled] = ["Your guess is correct", true];
        [checkButton.textContent, guess.style.color] = ["Replay"];
    }
});
