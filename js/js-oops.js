'use strict';
var o = {
  a: 2,
  x: 5,
  m: function () {
    return this.x + 1;
  }
};

console.log(o.m()); // 3
// When calling o.m in this case, 'this' refers to o

var p = Object.create(o);
// p is an object that inherits from o

p.a = 4; // creates a property 'a' on p

o.x = 10;

console.log(p.x); // 5




// when p.m is called, 'this' refers to p.
// So when p inherits the function m of o, 
// 'this.a' means p.a, the property 'a' of p




function foo() { }
foo.prototype = {
  foo_prop: "foo val"
};
function bar() { }
var proto = new foo;
proto.bar_prop = "bar val";
bar.prototype = proto;
var inst = new bar;
console.log(inst.foo_prop);
console.log(inst.bar_prop);


