let array = [10, 25, 3, 4, 5];
const [first, ...left] = array;

// console.log(left.reduce((sum, current) => sum + current));

let tuple = [7, "hello", true];
const [num, str, bool] = tuple;

// let obj = { a: "Josias", b: 22, c: true };
// const { a: name, ...rest } = obj;

const user = { name: "josnoc", password: "password", age: 24, isAdmin: true };
const { password, ...userWithoutPass } = user;

console.log(password);

// const first = array[0];
// const left = array.splice(1);

// const first = array[0];
// const second = array[1];

// console.log(userWithoutPass);

// class Person {
//   constructor() {
//     this.name = "charly";
//   }

//   sayHi() {
//     console.log(`Hi I'm`);
//   }
// }

// const charly = new Person();

// const { name, sayHi } = charly;

// console.log(name, sayHi());
