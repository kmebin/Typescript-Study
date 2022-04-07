/**
 * @사용자_정의_타입_사용
 */
type addFuncByType = (a: number, b: number) => number;

const add1: addFuncByType = (n1: number, n2: number) => {
  return n1 + n2;
};

/**
 * @인터페이스_사용
 */
interface addFuncByInterface {
  (a: number, b: number): number;
}

const add2: addFuncByInterface = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;

  constructor(n: string, private age: number) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

const user1 = new Person('Max', 30);

user1.greet('Hi there - I am');
console.log(user1);
