// // class Animal {
// //   private name: string;
// //   protected position: number;

// //   constructor(name: string) {
// //     this.name = name;
// //     this.position = 0;
// //   }

// //   move(distance: number) {
// //     this.position += distance;
// //   }

// //   get Name() {
// //     return this.name;
// //   }
// // }

// // class Lion extends Animal {
// //   roar() {
// //     console.log("Roaaaarrr!");
// //   }

// //   getPosition() {
// //     return this.position;
// //   }
// // }

// // class Octopus extends Animal {
// //   readonly numberOfLegs: number;

// //   constructor(name: string, numberOfLegs: number) {
// //     super(name);
// //     this.numberOfLegs = numberOfLegs;
// //   }
// // }

// // const mufasa = new Lion("mufasa");

// // mufasa.roar();

// // //STATIC METHODS:

// // class Stupid {
// //   static youAre() {
// //     console.log("You are stupid!");
// //   }
// // }

// // console.log(Stupid.youAre());

// abstract class Animal {
//   private name: string;
//   protected position: number;

//   constructor(name: string) {
//     this.name = name;
//     this.position = 0;
//   }

//   abstract makeSound(): void;

//   get Name() {
//     return this.name;
//   }
// }

// class Lion extends Animal {
//   makeSound() {
//     console.log("Roaaarrr!!");
//   }
// }

// const Simba = new Lion("simba");
// Simba.makeSound();
