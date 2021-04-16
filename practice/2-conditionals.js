// Usage: getRandomInt(6)
// Outputs a random number between 1 and 6
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Play a simple game of craps
// - Begin with the recipe (algorithm) and code from the first practice
// - Implement the (basic) rules of craps:

// Write the recipe (algorithm) in the comments. Write the code.
let d1 = getRandomInt(6)
console.log(`the first die is ${d1}`)
// Store the value of the second die in memory. Write it out to the console in a human-readable format.
let d2 = getRandomInt(6)
console.log(`the second die is ${d2}`)
// Store the value of the total of the two dice in memory. Write it out to the console in a human-readable format.
let total = d1 + d2
console.log(`the total is ${total}`)


//   - If the total of the two dice is 7 or 11, the player wins
if (total == 7 || total == 11) {
  console.log (`WINNER!`)
}else if ( total == 2 || total == 3 || total == 12) {
  console.log (`LOSER...`)
} else {
  console.log( `the point total is ${total}`)
}

//   - If the total of the two dice is 2, 3, or 12, the player loses
//   - If the total is anything else, the "point" is set, e.g. "the point is 6"
