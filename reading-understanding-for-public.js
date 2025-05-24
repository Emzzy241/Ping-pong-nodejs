// Ways to Handle input in node.js

// Similar to the Console.ReadLine() in C#, nodejs can handle user inputs in different ways:

// 1. The readline module: This is an internal module built into nodejs (i.e it comes with node, no need to install it separately). This module can help in handling user input

// code snippet
const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your input: ', (answer)=> {
    console.log(`You enterred: ${answer}`);
    rl.close();
});

rl.newQuestion('Enter another input: ', (answer2)=>{
    console.log(`You entered another input: ${answer2}`);
});

// This sets up an interface to read from the standard input (process.stdin). The 'question' method prompts the user and waits for input. After the user provides input, the callback function processes it.


// If you are working with asynchronous operations, you can wrap this in a promise for a better flow:

const askQuestion = (query) => {
    return new Promise((resolve)=> {
      rl.question(query, (answer) => {
       resolve(answer);
       rl.close();
});
});	
};
    


// This way, it integrates smoothly with async/await if needed.
// process.stdin in Node.js is like std::cin in C++—it waits for user input.
// It works asynchronously with event listeners, unlike C++'s synchronous input.


// Other ways to handle input are:
// 1. Using the process.stdin Directly

process.stdin.on('data',(data) =>{
    console.log(`You entered: ${data.toString().trim()}`);
});
// This works well for continuous input but lacks the built-in prompt functionality of readline.



// 2. Using Third-Party Libraries
// Several libraries make handling input more flexible:

// prompt-sync (Synchronous input)

const prompt = require('prompt-sync')();
const name = prompt('What is your name? ');
console.log(`Hello, ${name}!`);


// inquirer (For complex prompts, like multiple-choice questions)

const inquirer = require('inquirer');
inquirer
  .prompt([{ type: 'input', name: 'username', message: 'Enter your name:' }])
  .then((answers) => console.log(`Hello, ${answers.username}!`));

// The .then() method is used in JavaScript Promises to handle asynchronous operations.

// A callback hell is a deeply nested functions that is hard to read and maintain. It occurs when multiple callbacks are nested within each other, leading to code that is difficult to follow and debug.