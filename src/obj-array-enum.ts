enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: '김희빈',
  age: 25,
  hobbies: ['Sports', 'Cooking'],
  role: Role.AUTHOR
}

let activities: string[];

activities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
