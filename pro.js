let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    let userGuess = parseInt(document.getElementById("userGuess").value);
    let message = document.getElementById("message");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "*Please enter a number between 1 and 100.";
        message.style.color = "CRIMSON";
        return;
    }

    if (userGuess === randomNumber) {
        message.textContent = "BONJOUR! You got it right.";
        message.style.color = "#66FF00";
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low, TRY again.";
        message.style.color = "indigo";
        
    } else {
        message.textContent = "Too high, TRY again.";
        message.style.color = "indigo";
    }
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("message").textContent = "";
    document.getElementById("userGuess").value = "";
}
