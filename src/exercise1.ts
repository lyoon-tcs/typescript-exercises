export type User = {
  name: string;
  age: number;
  occupation: string;
};

export const users: User[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  }
];

// just for an object, so you wouldn't do User[], because the forEach on the bottom will loop over each user
export function logPerson(user: User): void {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
// looping over each user, then logging
users.forEach(logPerson);

// OUTPUT
// Users:
//  - Max Mustermann, 25
//  - Kate Müller, 23
