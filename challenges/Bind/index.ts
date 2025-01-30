const obj = { name: "Siva" };
function greet(this: any, greeting: string) {
  return `${greeting}, ${this.name}`;
}

const boundGreet = greet.bind(obj);

console.log(boundGreet("Hello"));
