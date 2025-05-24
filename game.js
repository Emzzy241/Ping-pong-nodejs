// This is where the game will be implemented

// User story for the app:ny of those numbers listed out can be divided by a 3 and a 5, they get a Ping and a Pong

// The user story for the game is to list out numbers from 0 to a user-input number, and then check if those numbers are divisible by 3 or 5, and print out the appropriate message.
// Print Ping if divisible by 3
// Print Pong if divisible by 5
// Print Ping Pong if divisible by both 3 and 5
// List out number if not divisible by 3 or 5

// const userNum = console.readline('Enter any number: ');


// Handling user-inputs in nodejs. 

// 1. Using readline module

const readline = require('node:readline');

// or import readLine from 'node:readline';

// Create an interface for input and output
// This will allow us to read input from the console and write output to the console
// The readline module provides an interface for reading data from a Readable stream (such as process.stdin) and writing data to a Writable stream (such as process.stdout).
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('');
rl.question('Enter any number: ', (answer) => {
    answer = Number(answer);
    let numArray = [];

    for (let i = 1; i <= answer; i++) {
        numArray.push(i);
    }
    console.log('');
    console.log(`The numbers from 0 to ${answer} are: `, numArray);
    console.log('----------------------------------------------------------------------');
    console.log('');
    console.log('The numbers divisible by 3 and 5 are: ');
    console.log('');
    console.log('----------------------------------------------------------------------');
    // Loop through the array and check for divisibility by 3 and 5
    
    numArray.forEach(element => {
        if (element % 3 === 0 && element % 5 === 0) {
            console.log('Ping Pong, divisible by 3 and 5');
            console.log('');
        } else if (element % 3 === 0) {
            console.log('Ping, divisible by 3');
            console.log('');
        } else if (element % 5 === 0) {
            console.log('Pong, divisible by 5');
            console.log('');
        } else {
            console.log(`${element} is Not divisible by 3 or 5`);
            console.log('');
        }
    });
    rl.close();
});