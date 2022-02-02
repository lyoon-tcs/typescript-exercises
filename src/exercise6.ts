interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    type: 'user',
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
  { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
  { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
  { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
  { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];

// takes in an object in format of User | Admin
export function logPerson(person: Person): void {
  console.log(
    ` - ${person.name}, ${person.age}, ${
      person.type === 'admin' ? person.role : person.occupation
    }`
  );
}

// export function filterPersons(
//   persons: Person[],
//   personType: string,
//   criteria: unknown
// ): unknown[] {
//   return persons
//     .filter((person) => person.type === personType)
//     .filter((person) => {
//       let criteriaKeys = Object.keys(criteria) as (keyof Person)[];
//       return criteriaKeys.every((fieldName) => {
//         return person[fieldName] === criteria[fieldName];
//       });
//     });
// }

export function filterPersons(
  persons: Person[],
  personType: string,
  criteria: Partial<Omit<Person, 'type'>>
) {
  console.log(persons);
  console.log(personType);
  console.log(criteria);
}

export const usersOfAge23 = filterPersons(persons, 'user', { age: 23 });
