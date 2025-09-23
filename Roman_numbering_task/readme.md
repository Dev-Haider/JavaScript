Roman Numeral to Integer Converter
📌 Overview

This project is a JavaScript program that converts Roman numerals into their integer (decimal) values.
The program also takes four Roman numeral inputs from the user and displays their converted integer values in the console.

⚙️ How It Works

The program defines a romanMap object that stores the values of Roman numeral characters (I, V, X, L, C, D, M).

It loops through each character of the input Roman numeral string.

If the current numeral is smaller than the next numeral (e.g., IV → 4), it subtracts the current value.

Otherwise, it adds the current value to the total.

Finally, it returns the total integer value.

🧑‍💻 Code Example
function romanToInt(s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let current = romanMap[s[i]];
    let next = romanMap[s[i + 1]];

    if (next && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}

let romanToInt0 = romanToInt(prompt("Enter your first Roman number: "));
let romanToInt1 = romanToInt(prompt("Enter your second Roman number: "));
let romanToInt2 = romanToInt(prompt("Enter your third Roman number: "));
let romanToInt3 = romanToInt(prompt("Enter your fourth Roman number: "));

console.log(romanToInt0);
console.log(romanToInt1);
console.log(romanToInt2);
console.log(romanToInt3);

▶️ Example Usage

Input:

Enter your first Roman number: X
Enter your second Roman number: IX
Enter your third Roman number: IV
Enter your fourth Roman number: MCMXCIV


Output:

10
9
4
1994

📚 Roman Numeral Rules

I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000

Smaller values placed before larger values are subtracted.

IV = 4 (5 - 1)

IX = 9 (10 - 1)

Otherwise, values are added.

XII = 12 (10 + 1 + 1)

XX = 20 (10 + 10)

🚀 How to Run

Copy the code into a .js file (e.g., romanToInt.js).

Open it in a browser console or run with Node.js.

Enter Roman numerals when prompted.

View results in the console.