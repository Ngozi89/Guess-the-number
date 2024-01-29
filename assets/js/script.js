// The DOM elements
let input = document.querySelector("input"),
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

    // Check if input value is equal to random number and update the guessed number and disable input
    if (inputValue == randomNum) {
        [guess.textContent, input.disabled] = ["Hey! Your guess is right!", true];
        [checkButton.textContent, guess.style.color] = ["Replay"];
    } else if (inputValue > randomNum && inputValue < 100) {
        [guess.textContent, remainChances.textContent] = ["Your guess is high", chance];
    } else if (inputValue < randomNum && inputValue > 0) {
        [guess.textContent, remainChances.textContent] = ["Your guess is low", chance];
    } else {
        // Update the guessed remaining chances
        [guess.textContent, remainChances.textContent] = ["Your number is invalid", chance];
    }

    // Update guessed number text and indicate user loss.
    if (chance == 0) {
        [checkButton.textContent, input.disabled, inputValue] = ["Replay", true, ""];
        [guess.textContent] = ["You lost the game, try again"];
    }
    if (chance < 0) {
        window.location.reload();
    }
});
