function * generatorFunction() {
  
  console.log('This will be executed first.');
  yield 'Hello';
  console.log("I will be printed ");
  yield 'World!';

}

const generatorObject = generatorFunction();
console.log(generatorObject.next().value); // Line 4
console.log(generatorObject.next().value); // Line 5
console.log(generatorObject.next().value); // Line 6
