// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
let consume =  (a,b,cb) => {cb(a,b);};

function add(a, b) {
  console.log("sum is ", a + b);
}
function multiply(a, b) {
  console.log("multiplication is ", a * b);
}
function greeting(a, b) {
  console.log(`Hello ${a} ${b}, nice to meet you`);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nested function can access the variable internal.

// Explanation: 
// When functions are nested, the scope of the outer function affects every other function below it. Let's use this analogy, it is like a car with a tinted glass. People standing outside cannot see within. However, those inside the car can see everything happening outside.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
