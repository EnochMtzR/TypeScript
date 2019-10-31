const josias = {
  name: "josias",
  age: 25,
  sayHi: () => {
    console.log(`Hi my name is ${this.name}`);
  }
};

const abner = {
  name: "abner",
  age: "20"
};

const receivePersonAndSayHi = person => {
  person.age = person.age + 25;
  console.log(person.age);
  person.sayHi();
};

receivePersonAndSayHi(josias);
receivePersonAndSayHi(abner);
