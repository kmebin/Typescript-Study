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
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) this.name = n;
  }

  greet(phrase: string) {
    if (this.name) console.log(`${phrase} ${this.name}`);
    else console.log('Hi!')
  }
}

const user1 = new Person('Max');

user1.greet('Hi there - I am');
console.log(user1);

const user2 = new Person();

user2.greet('Hi there - I am');
console.log(user2);
