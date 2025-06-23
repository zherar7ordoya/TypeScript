import Deck from "./deck";
import { ICard } from "./types";
import { getBet, getDecision, getHandValue, getStrHand } from "./utils";

function playerTurn(playerHand: ICard[], deck: Deck): number {
  // should return the hadn value after the turn is over
}

function dealerTurn(dealerHand: ICard[], deck: Deck): number {
  // should return the hadn value after the turn is over
}

let dealerHand: ICard[] = [];
let playerHand: ICard[] = [];
const deck: Deck = new Deck();
let balance = 100;

while (balance > 0) {
  console.log(`\nPlayer funds $${balance}`);
  const bet = getBet(balance);
  balance -= bet;

  // Deal the cards
  deck.reset();
  playerHand = deck.deal(2);
  dealerHand = deck.deal(2);

  const playerValue = getHandValue(playerHand);
  const dealerValue = getHandValue(dealerHand);

  console.log(`Your hand: ${getStrHand(playerHand)} (Total: ${playerValue})`);
  console.log(`Dealer's hand: ${getStrHand(dealerHand, true)}`);
  if (playerValue === 21) {
    balance += bet * 2.5;
    console.log(`Blackjack! You won $${bet * 2.5}`);
    continue;
  } else if (dealerValue === 21) {
    console.log(`Dealer's hand: ${getStrHand(dealerHand)}, (Total: 21)`);
    console.log("Dealer has Blackjack, you lost...");
    continue;
  }

  const finalPlayerValue = playerTurn(playerHand, deck);
  if (finalPlayerValue > 21) {
    console.log("You bust and lost...");
    continue;
  }
  const finalDealerValue = dealerTurn(dealerHand, deck);
  if (finalDealerValue > 21 || finalPlayerValue > finalDealerValue) {
    balance += bet * 2;
    console.log(`You won $${bet * 2}`);
  }
  else if (finalDealerValue === finalPlayerValue) {
    balance += bet
    console.log("Push (tie).")
  } else {
    console.log("You lost to the dealer.")
  }
}

console.log("You ran out of money!");
