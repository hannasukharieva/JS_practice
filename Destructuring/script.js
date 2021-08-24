// Destructuring assignment with arrays
// A sample array
const fruit = ['orange', 'mango', 'pineapple']

// Individual assignment to variables
// const fruit0 = fruit[0];
// const fruit1 = fruit[1];
// const fruit2 = fruit[2];

// console.log(fruit1, fruit2, fruit3)

//Desctucturing syntax (0 index is omitted)
const [ , fruit1, fruit2] = fruit
console.log(fruit1, fruit2)

// Destructuring assignment with objects
//Sample object
let names = {me: 'Hanna', husband: 'Dan', pet: 'Johnny'};

// Individual assignment to variables
// const myName = names.me;
// const husbandName = names.husband;
// const petName = names.pet;

//Destructuring syntax
const { me: myName, husband, pet } = names;

console.log(myName, husband, pet);

//Destructuring function parameters

const myDan = {
  model: 'hooman',
  maker: 'galynaVladimirovna',
  city: 'Kharkiv',
  year: '1993',
  cute: true,
  love: 'kudriashki',
  hate: 'zanuda',
}

const printDanInfo = ({model, maker, love, hate}) => {
  console.log(`This ${model} was made by ${maker}, I love him for his ${love} and tolerate that he is a ${hate}`)
}

printDanInfo(myDan)

const prairieRose = {
  name: 'Prairie Rose',
  scientificName: 'Rosa arkansana',
  kingdom: 'Plantae',
  genus: 'Rosa',
  use: 'ornamental',
}

const printPlantInfo = ({name, scientificName, kingdom}) => {
  console.log(`The ${name}, or ${scientificName}, is in the kingdom ${kingdom}.`)
}

printPlantInfo(prairieRose)