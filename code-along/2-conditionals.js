// Usage: getRandomInt(6)
// Outputs a random number between 1 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: "Guess the number" game. 
// - Store a random integer between 1 and 10 in memory; produce a 
//   human-readable output to the JavaScript Console in Chrome showing 
//   the number. 
 

// - If the user guessed the number, display "YOU WIN!"
// - If the user did not guess the number, display "SORRY!"

// input is a variable which contains the user's input
let input = prompt(`Enter a number between 1 and 10`)

// Write the recipe (algorithm) in the comments. Then, write the code.
// - Store a random integer between 1 and 10 in memory; produce a 
let randomNumber = getRandomInt(10)
console.log(`the random number is ${randomNumber}`)

// - Then, show the number the user entered ("input").
console.log(`you entered ${input}`)

// - If the user did not enter a number between 1-10, display an error
//   message.

let message
if (input < 1 || input > 10){
  message = `Did you read the directions?!`
} else if (input == randomNumber) {
  message = `YOU WIN!!!`
} else {
  message = `SORRY.`
}
console.log(message)


// if (condition) {
//   console.log (`it was true`)
// } else {
//   console.log('it was false')
// }
