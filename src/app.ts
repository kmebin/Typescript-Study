const add = (a: number, b = 1) => a + b;
const printOutput = (output: number) => console.log(output);
const printOutput2: (a: number) => void = output => console.log(output); // 함수의 타입을 명시해주는 방법

printOutput(add(5));

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', () => {}); // 익명 함수
  button.addEventListener('click', event => console.log(event));
}

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
const activeHobbies2 = ['Hiking', ...hobbies]

activeHobbies.push(...hobbies); // push로도 가능

const person = {
  name: 'Max',
  age: 30
};
const notCopiedPerson = person;
const copiedPerson = { ...person };

export {};
