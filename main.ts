interface Person {
  name: string;
  age: number;
  sayHi?: () => void;
}

const josias: Person = {
  name: "Josias",
  age: 24,
  sayHi: () => {
    console.log(`Hi, my name is ${josias.name}`);
  }
};

const abner: Person = {
  name: "Abner",
  age: 8
};

const receivePersonAndSayHi = (person: Person) => {
  person.age = person.age + 25;
  console.log(person.age);
  person.sayHi ? person.sayHi() : void 0;
};

receivePersonAndSayHi(josias);
receivePersonAndSayHi(abner);
