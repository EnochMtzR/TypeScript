let str: string;
let num: number;
let bool: boolean;
let strArray: string[];
let numArray: number[];
let boolArray: boolean[];
let tuple: [string, number, boolean];
let ICanBeAnything: any;
let obj: object;

enum Colors {
  blue = "#0000FF",
  red = "#FF0000",
  green = "#00FF00",
  yellow = "#FFFF00",
  cyan = "#00FFFF",
  purple = "#FF00FF",
  white = "#FFFFFF",
  black = "#000000"
}

str = "Hello";
num = 11.5;
bool = false;

strArray = [];
strArray[0] = "Hello";
strArray[1] = "world";
strArray[2] = "!";

numArray = [1, 2, 3, 4, 5];

tuple = ["Josias", 22, false];

const car = {
  color: Colors.blue,
  type: "BMW"
};

ICanBeAnything = "I can Fly";
ICanBeAnything = 20;
ICanBeAnything = true;
ICanBeAnything = [1, 2, 3, 4, 5];

const noOp: void = void 0;

let nullVar: null = null;
let undefVar: undefined;

let a: never; // =>

const neverReturns: () => never = () => {
  while (true) {}
};

obj = {
  a: "Hello"
};

obj = new Number(25);

obj.toString();
