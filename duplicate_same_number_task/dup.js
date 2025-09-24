function findDuplicates(arr) {
  let seen = new Set();
  let duplicates = new Set();
  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }
  return Array.from(duplicates);
}
let userInput = prompt("Enter numbers separated by spaces:");
let numbers = userInput.split(" ").map(Number);
console.log("Duplicates are:", findDuplicates(numbers));
