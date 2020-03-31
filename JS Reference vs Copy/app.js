//  start with strings, numbers and booleans

// let age = 100;
// const age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);

// const name = 'rifat';
// let name2 = name;
// console.log(name, name2);
// name2 = 'Hossain';
// console.log(name, name2);

// ! primitive values are copy based

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const team = players;

console.table(players);
console.table(team);
// and we want to make a copy of it.

// You might think we can just do something like this:
// ! team[3] = 'lux';
// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

const team2 = players.slice();

console.table(team2);

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);
console.table(team3);

// or use the new ES6 Spread

const team4 = [...players];

console.table(team4);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80,
};

console.log(person);
// and think we make a copy:

// how do we take a copy instead?

const person2 = Object.assign({}, person, { name: 'Rifat Hossain', age: 25 });
console.log(person2);

// We will hopefully soon see the object ...spread
const person3 = { ...person };
console.log(person3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
