function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

const person = new Person("Alice");
person.sayHello(); // Hello, my name is Alice
