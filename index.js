const random = require('./src/random.js')
const ru = require('./src/locale/ru')
const en = require('./src/locale/en')
const Person = require('./src/person')

const person = new Person(en);

for (let i = 0; i < 10; i++)
    console.log(person.generateAddress());
