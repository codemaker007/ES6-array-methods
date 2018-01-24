const people = [
  { first_name: "Lilly", last_name: "Buxsy", age: 63 },
  { first_name: "Livy", last_name: "Boobyer", age: 65 },
  { first_name: "Gwendolyn", last_name: "Betjes", age: 60 },
  { first_name: "Dame", last_name: "Condy", age: 56 },
  { first_name: "Maurizia", last_name: "Lindores", age: 96 },
  { first_name: "Gwenneth", last_name: "Chartre", age: 88 },
  { first_name: "Gerry", last_name: "Junkinson", age: 42 },
  { first_name: "Janetta", last_name: "Hallex", age: 99 },
  { first_name: "Nanice", last_name: "Girdler", age: 55 },
  { first_name: "Aubrie", last_name: "Crummey", age: 56 }
];

// One liner
const totalAge = people.reduce((total, person) => total + person.age, 0);

console.table(totalAge);