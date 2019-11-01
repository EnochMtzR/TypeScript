// const rightArray = [0, 1, 2, 3, 4, 5];
// const leftArray = [-5, -4, -3, -2, -1];
// const [ignore, ...leftWithouthFive] = leftArray;
// const ruler = [-6, ...leftWithouthFive, ...rightArray, 6];

// console.log(ruler);

// const elements = [2, 5, 10];
// const sum = (num1, num2, num3) => num1 + num2 + num3;
// const sum2 = ([num1, num2, num3]) => num1 + num2 + num3;

// const getArray = array => array;

// // sum(element[0], element[1] ..., element[n])
// // const result = sum(...elements);
// const result = sum2(elements);
// // [num1, num2, num3] = elements;

// getArray([1, 2, 3]);
// // array = [1, 2, 3]

// console.log(result);

// const defaultComment = {
//   user: "anonym",
//   comment: "",
//   date: Date.now()
// };
// const comment = { comment: "This is Horrible" };
// //                  { user: "anonym", comment: "",                 date: Date.now() }
// //                  {                 comment: "This is Horrible", }
// const fullComment = { ...defaultComment, comment: "I Hate You!", banned: true };

// console.log(fullComment);

class Person {
  constructor() {
    this.name = "Josias";
    this.age = 22;
    this.sayHi = () => {
      console.log(`Hola soy ${this.name}`);
    };
  }

  sayHello() {
    console.log(`Hola soy ${this.name}`);
  }
}

const Josias = new Person();
const superJosias = { ...Josias, canFly: true };

console.log(superJosias);
superJosias.sayHi();

const jos = {
  name: "jos",
  age: 22,
  sayHello: () => {
    console.log(`Hello im ${jos.name}`);
  }
};

const superJos = { ...jos, canFly: true };

console.log(superJos.sayHello());
