let score=0;
console.log("Welcome to the quiz!")
console.log("Question number 1\n")
console.log("What is the capital of France?");
console.log("A) Berlin");
console.log("B) Madrid");
console.log("c) Paris");
console.log("D) Rome");
let choice =prompt("Enter your Answer: ");
if(choice==="c"){
    alert("Your answer is correct✅")

    score++;
}
else{
    alert("Your answer is Incorrect❌")
}
console.log("\nQuestion number 2")
console.log("Which number is even?");
console.log("A) 3 ");
console.log("B) 5");
console.log("c) 7");
console.log("D) 8");
let choic =prompt("Enter your Answer: ");
if(choic==="d"){
    alert("Your answer is correct✅")

    score++;
}
else{
    alert("Your answer is Incorrect❌")
}
alert("Quiz is completed!");
console.log("\nYour final score: " + score + " out of 2");

if (score===0){
    console.log("😢 Better luck next time!")
}
if (score===1){
    console.log("👏 Good try! You got some respect!")
}
if (score===2){
    console.log("🎉 Excellent! Perfect score!")
}
let first=prompt("do you want to play again: YES/NO? ")
if(first==="no"){
    alert("Goodbye!")
}
else{
    alert("Here we go again :)")
}



