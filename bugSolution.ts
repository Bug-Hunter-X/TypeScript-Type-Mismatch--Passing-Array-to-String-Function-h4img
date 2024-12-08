function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Accessing array elements
console.log(greeter(user[0])); // Accessing the first element
console.log(greeter(user.join(" "))); // Joining array elements into a string

// Solution 2: Type Assertion (use with caution)
console.log(greeter(user as any as string));

// Solution 3: Function Overloading
function greeter(person: string): string;
function greeter(person: string[]): string;
function greeter(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(" ");
  }
}
console.log(greeter(user));
console.log(greeter("John"));