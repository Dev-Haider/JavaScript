console.log("Welcome to the game");
console.log("Choose the following options:");
console.log("1. Let's play");
console.log("2. Quit game");

let words = ["apple", "banana", "peach", "mango", "grapes", "watermelon"];

while (true) {
  const choice = prompt("Enter your choice (1 to play, 2 to quit):");

  if (choice === "2") {   // compare with string
    console.log("Goodbye!");
    break;

  } else if (choice === "1") {
    let word = words[Math.floor(Math.random() * words.length)];
    console.log("Random word chosen:");
    let splitWords = word.split("")
    console.log("splitwords")
    console.log("randomlist")
    let randomList = splitWords.sort(() => Math.random() - 1)
    let scrambled = randomList.join("");

let guess = " " ;
while (guess !== word) {
  guess = prompt(`Guess the word : ${scrambled}---- `);

  if (guess === word) {
    alert("🎉 Correct!");
  } else {
    alert("❌ Wrong, try again!");
  }
}
  } else {
    console.log("Invalid choice — try again.");
  }
}
