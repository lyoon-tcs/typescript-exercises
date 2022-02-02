interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  },
  {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver'
  }
];

/*
 * In this example, I'm actually accessing role (in Admin) or occupation (in User)
 * so run an if check (if role in property exists, else...)
 */

export function logPerson(person: Person): void {
  let additionalInformation: string;
  /*
   * so for typescript, if you want to check if role property exists,
   * instead of person.role, do "role" in person (just syntax I'll have to learn)
   * *NOTE* can be confused with in loop, or thinking you can do a dot notation check (person.role). doesn't work
   */
  if ('role' in person) {
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
