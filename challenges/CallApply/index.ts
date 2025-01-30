function greet(this: any, greeting: string, punctuation: string) {
  return `${greeting}, ${this.name} ${punctuation}`;
}

const person = { name: "Bharath" };

console.log(greet.call(person, "Hi", "!"));
console.log(greet.apply(person, ["Hi", "!"]));
