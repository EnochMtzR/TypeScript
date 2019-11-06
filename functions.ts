// type calcFunction = (a: number, b: number) => number;

// const sumatoria = (...rest: number[]) =>
//   rest.reduce((sum, current) => sum + current);

// console.log(sumatoria(1, 1, 1, 1, 1));

// let array = [1, 2, 3, 4, 5, 6, 7, 8];

// type IReduceCallback = (
//   previous: number,
//   current: number,
//   index?: number,
//   array?: number[]
// ) => number;

// function reduce(array: number[], callback: IReduceCallback) {
//   let result = 0;
//   array.forEach((element, index) => {
//     result = callback(result, element, index, array);
//   });

//   return result;
// }

// const reduced = reduce(array, (sum, current) => sum + current);

// console.log(reduced);

// function suma(a: number, b: number): number;
// function suma(a: number, b: number, ...numbers: number[]): number;
// function suma(a: number, b: number, ...numbers: number[]): number {
//   const rest = numbers ? numbers.reduce((sum, current) => sum + current) : 0;
//   if (!numbers) return a + b;
//   else return a + b + rest;
// }

// suma(1, 2, 3, 5, 2, 1, 2);

// function suma(asString: boolean, ...numbers: number[]): number;
// function suma(asString: boolean, ...numbers: number[]): string;
// function suma(asString: boolean, ...numbers: number[]): any {
//   const suma = numbers.reduce((sum, current) => sum + current);
//   return asString ? suma.toString(10) : suma;
// }

// const strSuma = suma(true, 1, 2, 3, 4, 5);
// const numSuma = suma(false, 1, 2, 3, 4, 5);

// console.log(
//   `strSuma : ${strSuma} as ${typeof strSuma}\nsuma : ${numSuma} as ${typeof numSuma}`
// );
