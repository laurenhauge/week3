// Usage: getRandomInt(6)
// Outputs a random number between 1 and 6
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Simulate the rolling of two six-sided dice

// Write the recipe (algorithm) in the comments. Write the code.

// Store the value of the first die in memory. Write it out to the console in a human-readable format.
let d1 = getRandomInt(6)
console.log(`the first die is ${d1}`)
// Store the value of the second die in memory. Write it out to the console in a human-readable format.
let d2 = getRandomInt(6)
console.log(`the second die is ${d2}`)
// Store the value of the total of the two dice in memory. Write it out to the console in a human-readable format.
let total = d1 + d2
console.log(`the total is ${total}`)