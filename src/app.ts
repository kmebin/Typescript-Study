const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: '김희빈',
  age: 25,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
}

let activities: string[];

activities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}