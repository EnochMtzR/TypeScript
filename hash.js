const person = {
  name: "Abner",
  age: 20,
  mexican: true
};

person["mexican"] = false;

console.log(Object.keys(person));

console.log(person);
