// Usage: getRandomInt(6)
// Outputs a random number between 1 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Read the "Musicessories" database into memory; write information
// about products and promotions to the JavaScript Console.
// - PART 1: Write out the number of products/promotions in the database, in a human-readable
//   format, to the JavaScript console, e.g. "There are x products."
// - PART 2: Write the name, description, and price of the first 3 products to the JavaScript
//   console – the name, description, and price should each be on its own line, and the
//   price should be formatted like "$5.49 each".
// - PART 3: Get a random promotion from the list of promotions. Display the description of the
//   promotion, along with the appropriate emoji.
//   - Discount = 🤑
//   - Shipping = 🚛
//   - Contest = 🏆

// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from products API endpoint
  let response = await fetch('https://kiei451.com/api/products.json')
  let data = await response.json()

  // writes the product data to the JavaScript console
  console.log(data)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.

  // PART 1
  // Figure out how products there are, and store that number in memory
  let numProducts = data.products.length
  console.log(`Number of products: ${numProducts}`)

  // Figure out how promotions there are, and store that number in memory
  let numPromos = data.promotions.length
  console.log(`Number of promos: ${numPromos}`)

  // Write the number of products to the JavaScript console

  // Write the number of promotions to the JavaScript console

  // PART 2
  // Store the first product in memory
  

  // Write the first product to the JavaScript console, on three separate lines
  let product1 = data.products[0]
  console.log(`Product 1`)
  console.log(product1.name)
  console.log(product1.price)
  console.log(product1.description)

  // Repeat for the 2nd and 3rd products
  // Store the second product in memory
  let product2 = data.products[1]
  console.log(`Product 2`)
  console.log(product2.name)
  console.log(product2.price)
  console.log(product2.description)

  let product3 = data.products[2]
  console.log(`Product 3`)
  console.log(product3.name)
  console.log(product3.price)
  console.log(product3.description)

  // Write the product to the JavaScript console, on three separate lines
  
  // Store the third product in memory

  // Write the product to the JavaScript console, on three separate lines

  // PART 3
  // Get a random integer between 1 and 10
  randomNum = getRandomInt(10)
  randNum = randomNum - 1

  // Subtract one from that random integer because Arrays are zero-based

  // Use the random integer to grab a promotion from the Array of promotions
  // and store it in memory
  let randPromotion = data.promotions[randNum]
  console.log(randPromotion)
  // Figure out which emoji should be displayed, store it in memory (you will need
  // an empty variable for this before you write any conditional)
  let emojiType
  if (randPromotion.type == `discount`){
    emojiType = `🤑`
  } else if (randPromotion.type == `shipping`) {
    emojiType = `🚛`
  } else {
    emojiType = `🏆`
  }


  // Create a sentence that displays the emoji along with the description 
  // of the promotion
  console.log(`${emojiType} ${randPromotion.description}`)


  // Write the sentence to the JavaScript console

  // 🔥 YOUR CODE ENDS HERE 🔥
})
