// number of lives
// list of iconS
// 18 cards 9 pairs


// make a list of icons
//randomize the Icons

 Math.floor(Math.random() * 19);
// const newArr = icons.map((icon) => {
//     return `<p>${icon}</p>`
// }).join('')
// console.log(newArr)
const iconString = icons.map(icon => {
  return `<div class="grid-item">${icon}</div>`
})
const grid = querySelector('#grid')

const icons = [
  'fas fa-umbrella-beach'
  'fas fa-umbrella-beach'
  'fas fa-house-user'
  'fas fa-house-user'
  'fas fa-dragon'
  'fas fa-dragon'
 'fab fa-wolf-pack-battalion'
 'fab fa-wolf-pack-battalion'
 'fas fa-sun'
 'fas fa-sun'
 'fas fa-moon'
 'fas fa-moon'
 'fas fa-star'
 'fas fa-star'
 'fab fa-linux'
 'fab fa-linux'
 'fas fa-dog'
 'fas fa-dog'
]

const iconString = icons.map(icon => {
  return `<div class="grid-item">
  <span class="${icon}"></span>
  </div>`
}).join('')

grid.innerHTML = iconString



// - Have a "new game" screen with a single choice "new game"

// - The game should have a total of 9 pairs (18 cards total)

const cardsArr [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9,]

// randomize the cards during shuffle
function shuffle(array) {
    var currentIndex = array.length, tempValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      //swap it with the current element.
      tempValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempValue;
    }
    return array;
  }
let randomCards = shuffle(cardsArr)
console.log(randomCards)

// - When the user runs out of turns, show a losing screen
function makeGuesses()
const state = {
    guesses: []
    lives: 10
}

// - When the user finds a match, leave the cards face up and disallow clicking those cards

// - When the chooses two cards that do not match, flip them back over

// - When the user wins or loses, indicate as much

// - All screens should be generated via JavaScript templates