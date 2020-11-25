function* generatorFunction() {

  console.log('This will be executed first.');
  yield 'Hello';
  console.log("I will be printed ");
  yield 'World!';

}

const generatorObject = generatorFunction();
// console.log(generatorObject.next().value); // Line 4
// console.log(generatorObject.next().value); // Line 5
// console.log(generatorObject.next().value); // Line 6


let asyncIter = {
  [Symbol.asyncIterator]() {
    return {
      current: 1,
      last: 10,
      async next() {
        await new Promise(resolve => setTimeout(resolve, 1000*Math.random()));
        if (this.current <= this.last) {
          return { value: this.current++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

  (async () => {
    for await (let x of asyncIter) {
      console.log(x);
    }
  })();