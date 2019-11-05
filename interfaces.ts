// interface IPerson {
//   name: string;
//   age: number;
//   mexican: boolean;
// }

// const jos: IPerson = {
//   age: 22,
//   mexican: true,
//   name: "Josias"
// };

// function canDrink(person: IPerson) {
//   return person.age >= 18;
// }

//OBJECT INTERFACES
// interface Square {
//   area: number;
//   color: string;
// }

// interface SquareProps {
//   readonly width: number;
//   readonly color?: string;
//   [key: string]: any;
// }

// function newSquare(config: SquareProps) {
//   const square: Square = {
//     area: config.width * config.width,
//     color: config.color ? config.color : "red"
//   };
// }

// newSquare({ width: 10, color: "blue", flat: true });

// FUNCTION INTERFACES:

// type LogFunction = (cnaLog: boolean) => string;

// function log(message: string): LogFunction {
//   return (canLog: boolean) => (canLog ? `${message}` : "");
// }

// const logMessage = log("Hello World");

// function withTitle(logFunction: LogFunction) {
//   return `log_${new Date().toISOString()}: "${logFunction(true)}"`;
// }

// console.log(withTitle(logMessage));

// interface NumberArray {
//   [key: number]: number;
// }

// const array: NumberArray = [1, 2, 3, 4];

// interface NumberDictionary {
//   [key: string]: number;
// }

// interface immutableArray {
//   readonly [key: number]: number;
// }

// interface matrizUnitaria {
//   readonly [key: number]: immutableArray;
// }

// const matrizUnitaria: matrizUnitaria = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];

// interface Person {
//   name: string;
//   age: number;
//   isDead: boolean;
//   die: () => void;
// }

// class Player implements Person {
//   name: string;
//   age: number;
//   isDead: boolean;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//     this.isDead = false;
//   }

//   die() {
//     this.isDead = true;
//   }
// }

// interface Person {
//   name: string;
//   age: number;
//   isDead: boolean;
// }

// interface Player extends Person {
//   score: number;
// }

// const P1: Player = {
//   name: "Josias",
//   age: 22,
//   isDead: false,
//   score: 0
// };
