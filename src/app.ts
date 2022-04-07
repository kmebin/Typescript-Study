interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

const user1: Person = {
  name: 'Max',
  age: 30,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  },
};

user1.greet('Hi there - I am');