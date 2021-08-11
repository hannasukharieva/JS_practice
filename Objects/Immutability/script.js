//Original object

const person = {
  name: 'Hanna',
  age: 26
}

//New object with Object.assign method
const newPerson = Object.assign({}, person, {
  name: 'Dan'
})

//New object with the object spread operator

const newPerson2 = {
  ...person,
  age: 21,
}

//Deleting object properties
const cat = {
  name: 'Johnny',
  age: 10,
  hobby: 'biting people'
}
// Properties are assigned to the corresponding variables
let {name, age} = cat;

let {hobby} = {hobby: 'playing'};


const x = {
  foo: 'bar',
  far: 'boo',
  faz: 'baz',
}

const key = 'far';
const { foo, ...everythingElse} = x;