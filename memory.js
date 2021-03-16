// import icons from "./constants";
// import add, { shuffleArray, foo } from "./utils.js";
// console.log(add(1, 2));
// number of lives
// list of iconS
// 18 cards 9 pairs

// make a list of icons
//randomize the Icons

const icons = [
  "fas fa-umbrella-beach",
  "fas fa-umbrella-beach",
  "fas fa-house-user",
  "fas fa-house-user",
  "fas fa-dragon",
  "fas fa-dragon",
  "fab fa-wolf-pack-battalion",
  "fab fa-wolf-pack-battalion",
  "fas fa-sun",
  "fas fa-sun",
  "fas fa-moon",
  "fas fa-moon",
  "fas fa-star",
  "fas fa-star",
  "fab fa-linux",
  "fab fa-linux",
  "fas fa-dog",
  "fas fa-dog",
];

// - Have a "new game" screen with a single choice "new game"

// - The game should have a total of 9 pairs (18 cards total)

// const cardsArr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];

// randomize the cards during shuffle
// function shuffle(array) {
//   const newArray = [...array];
//   for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
//     const randomIndex = Math.floor(Math.random() * currentIndex + 1);
//     const temp = newArray[currentIndex];
//     newArray[currentIndex] = newArray[randomIndex];
//     newArray[currentIndex] = temp;
//   }
//   return newArray;
// }
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const shuffled = shuffle(icons);
// console.log(icons)
const iconString = shuffled
  .map((icon) => {
    return `<div class="grid-item" data-target="${icon}">
     <span class="grid-item-icon ${icon}"></span>
     </div>`;
  })
  .join("");
console.log(shuffled);

const grid = document.querySelector("#grid");

grid.innerHTML = iconString;

let card1 = null;
let card2 = null;
let lives = 8;

grid.addEventListener("click", (e) => {
  const currentCard = e.target;
  if (!card1) {
    card1 = currentCard;
  } else if (!card2) {
    card2 = currentCard;
  } else {
    if (card2 && card2) {
      return;
    }
  }
  // console.log(card1, card2)
  currentCard.classList.add("active");

  if (card1 && card2) {
    const icon1 = card1.dataset.target;
    const icon2 = card2.dataset.target;

    if (icon1 !== icon2) {
      lives--;
      if (lives === 0) {
        alert("GAME OVER SUPA LOSER(Arnold Schwarzenegger voice)");
      }

      // flip back after a second or something
      setTimeout(() => {
        card1.classList.remove("active");
        card2.classList.remove("active");
        card1 = null;
        card2 = null;
      }, 1000);
    } else {
      card1 = null;
      card2 = null;
    }
  }
});
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}
//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
//       //swap it with the current element.
//       tempValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = tempValue;
//     }
//     return array;
//   }
// let randomCards = shuffle(cardsArr)
// console.log(randomCards)

// // - When the user runs out of turns, show a losing screen
// function makeGuesses()
// const state = {
//     guesses: []
//     lives: 10
// }

// // - When the user finds a match, leave the cards face up and disallow clicking those cards

// // - When the chooses two cards that do not match, flip them back over

// - When the user wins or loses, indicate as much

// - All screens should be generated via JavaScript templates
