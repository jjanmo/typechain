class Human {
  public name: string;
  private _age: number;
  public hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this._age = age;
    this.hobbies = hobbies;
  }

  //getter
  get age(): number {
    return this._age;
  }
}

const jjanmo = new Human('jjanmo', 25, ['yoga', 'reading', 'game']);

const introduce = (person: Human): string => {
  return `
    This is Class 🔥
    My name is ${person.name}, I'm ${person.age} and enjoy ${person.hobbies.join(', ')}
  `;
};

console.log(introduce(jjanmo));

export {};
