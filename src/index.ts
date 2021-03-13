interface Human {
  name: string;
  age: number;
  hobbies: string[];
}

const person = {
  name: 'jjanmo',
  age: 25,
  hobbies: ['yoga', 'reading', 'game'],
};

const introduce = (person: Human): string => {
  return `
    This is Object type 🔥
    My name is ${person.name}, I'm ${person.age} and enjoy ${person.hobbies.join(', ')}
  `;
};

console.log(introduce(person));

export {};
