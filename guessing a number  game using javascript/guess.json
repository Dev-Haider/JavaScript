 const here = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
let guess;

while (attempts < 10) {
    guess = parseInt(prompt("Guess the number between 1 and 10:"));
    
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < here) {
        alert("Too low, try again");
    } else if (guess > here) {
        alert("Too high, try again");
    } else {
        alert("You guessed it right!");
        break; 
    }
      attempts++;
}

if (guess !== here) {
    alert(`Out of attempts! `);
}
