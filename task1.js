// task 1


const fs = require('fs');


const person = {
  fname: 'ahmed',
  lname: 'hossam',
  age: 20,
  city: 'alex'
};


const jsonPerson = JSON.stringify(person);


fs.writeFileSync('person.json', jsonPerson);

const readFile = fs.readFileSync('person.json', 'utf8');

const readPerson = JSON.parse(readFile);

readPerson.fname = 'adel';
readPerson.lname = 'ahmed';
readPerson.age = 40;
readPerson.city = 'cairo';

const updatedJsonPerson = JSON.stringify(readPerson);


fs.writeFileSync('updatedPerson.json', updatedJsonPerson);

console.log('Final Updated Person:', readPerson);


// task 2

const fs = require('fs');

const persons = [
  { id: 1, fname: 'Ahmed', lname: 'Ali', age: 25, city: 'Cairo' },
  { id: 2, fname: 'Fatma', lname: 'Youssed', age: 10, city: 'Alexandria' },
  { id: 3, fname: 'Mohamed', lname: 'Osama', age: 22, city: 'Luxor' },
  { id: 4, fname: 'Sara', lname: 'Mahmoud', age: 19, city: 'Mansoura' },
  { id: 5, fname: 'Hassan', lname: 'Aly', age: 35, city: 'Giza' },
  { id: 6, fname: 'Lina', lname: 'Amged', age: 26, city: 'Port Said' },
  { id: 7, fname: 'Rana', lname: 'Khaled', age: 15, city: 'Sinai' }
];


const updatedPersons = persons.filter(person => person.id !== 4 && person.id !== 6);


console.log('List of Persons:');
updatedPersons.forEach(person => {
  console.log(`ID: ${person.id}, Name: ${person.fname} ${person.lname}, City: ${person.city}`);
});

const fifthPerson = updatedPersons.find(person => person.id === 5);
if (fifthPerson) {
  console.log('\nData for the 5th Person:', fifthPerson);
} else {
  console.log('\nPerson with ID 5 not found.');
}
