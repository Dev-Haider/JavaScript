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
let romanToInt0=romanToInt(prompt("Enter your first roman number: "));
let romanToInt1=romanToInt(prompt("Enter your second roman number: "));
let romanToInt2=romanToInt(prompt("Enter your third roman number: "));
let romanToInt3=romanToInt(prompt("Enter your fourth roman number: "));

console.log(romanToInt0);
console.log(romanToInt1); 
console.log(romanToInt2); 
console.log(romanToInt3); 




