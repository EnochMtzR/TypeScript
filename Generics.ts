// type GenericFn = <T>(arg: T) => T;

// const fn: GenericFn = arg => arg;

// const recieved = fn([1, 2, 3, 4]);

// let stringArray: Array<string>;

// class genericCalc<T> {
//   value: T;

//   constructor(value: T) {
//     this.value = value;
//   }

//   sum(value: T): T {
//     if (typeof this.value === "number" && typeof value === "number")
//       return ((this.value + value) as unknown) as T;
//     else if (typeof this.value === "string" && typeof value === "string")
//       return (`${this.value} ${value}` as unknown) as T;
//     else if (Array.isArray(this.value) && Array.isArray(value))
//       return (this.value.concat(value) as unknown) as T;
//     else
//       throw new Error(`Cannot sum a ${typeof value} to ${typeof this.value}`);
//   }
// }

// try {
//   const numCalc = new genericCalc(true);

//   console.log(numCalc.sum(false));
// } catch (e) {
//   console.error(e);
// }

// type TClassAnimal<T> = new (name: string, ...rest: any[]) => T;

// abstract class Animal {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }

//   abstract talk(): string;
// }

// class Lion extends Animal {
//   talk() {
//     return "Roaaarrr!";
//   }
// }

// class Cat extends Animal {
//   color: string;
//   constructor(name: string, color: string) {
//     super(name);
//     this.color = color;
//   }
//   talk() {
//     return "meow!";
//   }

//   get type() {
//     return (this.constructor as any).name;
//   }
// }

// class Dog extends Animal {
//   talk() {
//     return "barf!";
//   }
// }

// function createAnimal<C extends Animal>(
//   constructor: TClassAnimal<C>,
//   name: string,
//   ...rest: any[]
// ): C {
//   return new constructor(name, rest);
// }

// const simba = createAnimal(Lion, "simba");
// const timoteo = createAnimal(Cat, "Timoteo", "orange");

// console.log(simba.talk());
// console.log(`${timoteo.name} is a ${timoteo.color} ${timoteo.type}`);
// console.log(timoteo.talk());
