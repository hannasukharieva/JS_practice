//Original object

const person = {
  name: 'Hanna',
  age: 26
}

//New object with Object.assign method
const newPerson = Object.assign({}, person, {
  name: 'Dan'
})