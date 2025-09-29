function here(str) {
  str = str.toLowerCase().replace(/\s+/g,"");
  if (new Set(str).size === str.length) {
    return " All characters are unique";
  } else {
    return "Characters are repeated";
  }
}
let userInput = prompt("Enter a string:");
alert(here(userInput));
