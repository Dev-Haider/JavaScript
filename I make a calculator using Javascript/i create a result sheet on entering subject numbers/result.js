let maths= Number(prompt("Enter marks of  maths: "))
let English= Number(prompt("Enter marks of English: "))
let chemistry= Number(prompt("Enter marks of chemistry: "))
let physics= Number(prompt("Enter marks of  physics: "))
let computer= Number(prompt("Enter marks of computer: "))

let totalMarks = maths + English + chemistry + physics + computer;
let average = totalMarks / 5;
let percentage = (totalMarks / 500) * 100;

let grade = "";

if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else if (percentage >= 50) {
    grade = "D";
} else {
    grade = "F";
}

console.log("-------STUDENT RESULT!---------")
console.log("maths",maths)
console.log("English", English)
console.log("chemistry",chemistry)
console.log("physics", physics)
console.log("computer",computer)
console.log("totalmarks;", totalMarks,"/500")
console.log("Average:", average.toFixed(2) + "%");
console.log("Grade:", grade);