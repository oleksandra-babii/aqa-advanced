const users = [
  { name: "Pavlo", email: "pavlo@example.com", age: 25 },
  { name: "Anna", email: "anna@example.com", age: 30, city: "Lviv" },
  { name: "Oleksandr", email: "oleksandr@example.com", age: 22, role: "admin" },
];

for (const { name, email, age, ...other } of users) {
  console.log(name, email, age, other);
}
