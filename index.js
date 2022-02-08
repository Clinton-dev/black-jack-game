const player = {
  name: "clint",
  cash: "50000"
}

let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
const startBtn = document.getElementById("start-btn");
const newCardBtn = document.getElementById("new-card-btn");
const consoleBtn = document.getElementById("console-btn");
const cardEl = document.getElementById("card-el");
const sumEl = document.getElementById("sum-el");
const messageEl = document.getElementById("message-el");
const playerEl = document.getElementById("player-el");


playerEl.textContent = `${player.name}: ksh ${player.cash}`;


render(cards, sum);

function start() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  render(cards, sum);
}

function render(arr, total) {
  let cardsDom = "";
  let msg = "";

  for(i = 0; i < arr.length; i++) {
      cardsDom += ` ${arr[i]} `;
  }

  cardEl.textContent = `Cards: ${cardsDom}`;
  sumEl.textContent = `Sum: ${total}`;

  if(sum <= 20){
    msg = `Do want to play another round!`
  }else if(sum === 21) {
    hasBlackJack = true;
    msg = `You won!`
  } else {
    isAlive = false;
    msg = `You're out of the game!`
  }

  messageEl.textContent = msg
}

function newCard() {
  if(isAlive == true && hasBlackJack == false) {
    let card  = getRandomCard();
    cards.push(card);
    sum += card;
    render(cards, sum);
  }
}

function getRandomCard() {
  let randomNo = Math.floor(Math.random() * 13) + 1;

  if(randomNo > 10) {
    return 10
  }else if(randomNo === 1) {
    return 11
  }else {
    return randomNo
  }
}