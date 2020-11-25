


class Array1 extends Array {
    static get [Symbol.species]() { return Array; }
  }
  
  const a = new Array1(1, 2, 3);
  const mapped = a.map(x => x * x);
  
  console.log(mapped instanceof Array1);
  // expected output: false
  
  console.log(mapped instanceof Array);
  // expected output: true
  const myAsyncIterable = {
    async* [Symbol.asyncIterator]() {
        yield "hello";
        yield "async";
        yield "iteration!";
    }
};

const x = [1,2,3,4];
const iter = x[Symbol.iterator]();
console.log(iter.next());

(async () => {
    for await (const x of myAsyncIterable) {
        console.log(x);
        // expected output:
        //    "hello"
        //    "async"
        //    "iteration!"
    }
})();

function *Gen(val) {
    val = yield val*2
    yield val
}
let generator = Gen(2)
let a1 = generator.next(3).value
let a2 = generator.next(4).value
console.log(a1)
console.log(a2)


function* gen() {
    while (true) {
      let value = yield null;
      console.log(value);
    }
  }
  
  const g = gen();
  g.next(1);
  // "{ value: null, done: false }"
  g.next(2);
  // 2
  