const name = 'jjanmo',
  age = 25,
  hobbies = ['yoga', 'reading', 'game'];

const introduce = (name: string, age: number, hobbies?: string[]): string => {
  return `
    My name is ${name}, I'm ${age} and enjoy ${hobbies.join(', ')}
  `;
};

console.log(introduce(name, age, hobbies));

export {};
