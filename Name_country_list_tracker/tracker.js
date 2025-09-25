let people = [
  { name: "Alice", country: "USA" },
  { name: "Bob", country: "UK" },
  { name: "Charlie", country: "USA"},
  { name: "babar", country: "KSA" },
  { name: "shop", country: "spain" }
];
let user = prompt("Enter your friend name:");
let found = people.find(person => person.name.toLowerCase() === user.toLowerCase());
if (found) {
  alert(`${found.name} is in the list and lives in ${found.country}`);
} else {
  alert("Not in the list");
}
