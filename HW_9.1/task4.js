const person = {
  firstName: "Pavlo",
  lastName: "Khomenko",
  age: 25,
};

person.email = "pavlo.khomenko@example.com";
delete person.age;

console.log(person);
