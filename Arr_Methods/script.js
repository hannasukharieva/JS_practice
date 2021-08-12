const array = ['Dan', 'Hanna', 'Johnny']
// Executes a provided reducer function on each element of the array reducing in a single output value
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array.reduce(reducer))