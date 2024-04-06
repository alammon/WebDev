// FUNCTION PRINCIPLES AND ANATOMY

// 3.0.0 Please describe a function "declaration" in your own words.
// A function declaration is the name of the function including different components like arguments, the body, and return statements.

// 3.0.1 Please describe a function "invocation" in your own words.
// A function invocation is when your using (call) your declared function to store the info from your function in a variable. Takes

// 3.0.2 Please describe function "arguments" in your own words.
// Varables passed to function

// 3.0.3 Please describe a function "body" in your own words.
// The meat of your code that is manipulating date. goes in between curly braces.

// 3.0.4 Please describe a function "return" in your own words.
// the return returns a value after you function has been executed.

// 3.0.5 Are function declarations and function invocations unique to JavaScript, or does this concept of a declaration vs an invocation occur in other programming languages?
// function declarations and invocations are in all languages (that I have worked with).

// 3.0.6 Why is the insight of declarations and an invocations relevant?
// Having insight on what declartions and invocations do is very important for understanding their imporatnce.
// Knowing how they work shows us how these two things correlate.

// 3.0.7 What is a way to easily recognize function invocation?
// An easy way to recognize an invocation is if the function name is followed by parenthesis ()
// for example if I have function named test, an invocation would look like this test().

// 3.0.8 Please describe function "hoisting" in your own words.
// Hoisting is the beforhand executing of javascipt where functions, variables, and classes are moved to the top
// of their scope. functions get hoisted when they hold a function keyword.

// 3.0.9 Why does function hoisting matter in your own words?
// Allows us to uses functions, variables and classes before they are declared. When
// something has keyword function it gets hoisted to top of scope.

// SECTION 3.1.X - FUNCTION EXPRESSION SYNTAX AND HOISTING

// 3.1.0 Please write an example function expression declaration.
// must use the JavaScript expression syntax reserved keyword "function"
// function must have a name
// function body must console.log text of your choice
// testFunction();
function testFunction() {
  console.log("the sky is blue");
}

// 3.1.1 Please invoke the function declaration from problem 3.1.0 below the declaration
const myReturn = testFunction();

// 3.1.2 Please invoke the function declaration from problem 3.1.0 above the declaration

// 3.1.3 Why are you able to invoke the function above the declaration in your own words?
// we are able to call the function above the declaration because of our function delcartion
// Our funcion delcartion gets executed before anything else which is why it's not printing
// undefined. This is because it has keyword funciton.

// 3.1.4 Please observe that the function from 3.1.0 has no return statement. What is the default return value in JavaScript if the function body contains no return statement?
// undefined.

// SECTION 3.2.X - ARROW FUNCTIONS BASIC TOY EXAMPLES - LONGHAND AND SHORTHAND WITH IMPLICIT RETURN

// 3.2.0 Please write an arrow function that uses curly braces and a return statement.
// arrow function must be assigned to a "const" named "addFive"
// function will take a single argument called "number"
// function body must add five to the number argument and return the result
// must use curly braces and must explicitly use the "return" keyword

// addFive(10);
const addFive = (number) => {
  return number + 5;
};

// 3.2.1 Please invoke the function declaration from problem 3.2.0 and console.log the result.
const result = addFive(5);
console.log("result: ", result);

// 3.2.2 Does this example arrow function get hoisted? Why or why not?
// No because it doesn't because it doesn't have have keyword 'function'

// 3.2.3 Please write an arrow function that uses no curly braces (single statement arrow function, implicit return)
// arrow function must be assigned to a "const" named "addTen"
// function will take a single argument called "number"
// function body must add 10 to the number argument and return the result using an implicit return
const addTen = (number) => number + 10;

// 3.2.4 Please invoke the function declaration from problem 3.2.3 and console.log the result.
const result2 = addTen(5);
console.log("reult of 10 + 5: ", result2);

// SECTION 3.3.X - ARROW FUNCTION PRACTICAL APPLICATIONS - MAP, FILTER, and REDUCE

// Arrow functions are useful because of their brevity, conciseness, readability. Let's work through some examples.

const people = [
  { firstName: "Steve", lastName: "Martin", isReal: true, age: 78 },
  { firstName: "Will", lastName: "Ferrell", isReal: true, age: 56 },
  { firstName: "Robin", lastName: "Hood", isReal: false, age: 1500 }, // is this the right age?
  { firstName: "Luke", lastName: "Skywalker", isReal: false, age: 75 }, // not really sure what his age is.
];

// 3.3.0 Please extract all first names into a new array using map and a single line arrow function with implicit return, log the result
const firstNames = people.map((person) => person.firstName);
console.log("firstNames", firstNames);

// 3.3.1 Please create a list of real people using filter and a single line arrow function, log the result
const realPeople = people.filter((person) => person.isReal);
console.log("real people: ", realPeople);

// 3.3.2 Please sum the ages of all real people using reduce and console.log the result
const totalAge = realPeople.reduce(
  (sum, currentPerson) => (sum += currentPerson.age),
  0
);
console.log("totalAge: ", totalAge);

// 3.3.3 For problems 3.3.0, 3.3.1, and 3.3.2 would you rather use an arrow function, or a "function" keyword such as the function from problem 3.3.0? Why?
// I would personally rather use an arrow keyword for its simplicity.

// 3.3.4 What is an "anonymous function"? Are the functions used in 3.3.0, 3.3.1, and 3.3.2 "anonymous", or "named"?
//An anonumous function is a function without a function name. The functions used in 3.3.0, 3.3.1, and 3.3.0 are named functions. We can tell because there is
// names before the parenthesis for all of these functions.

// 3.3.5 Why are "anonymous" functions useful? When are they useful?
// They are usefull because they allow coders to write more concise code that is much
// easier to read. They are useful when trying to avoid cluttering name space with function
// that are only getting called once.

// 3.3.6 Do other languages besides JavaScript use "anonymous" functions?
// Yes. Other languages, such as Python, also use anonymous functions.
