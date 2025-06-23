function drawCard() {
  const suits = ['♠', '♥', '♦', '♣'];
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  const isRed = (randomSuit === '♥' || randomSuit === '♦');

  const card = document.getElementById('card');
  card.classList.remove('red');
  if (isRed) card.classList.add('red');

  document.getElementById('value').textContent = randomValue;
  document.getElementById('topLeftSuit').textContent = randomSuit;
  document.getElementById('bottomRightSuit').textContent = randomSuit;

  // Make back icon match front card suit
  document.getElementById('backIcon').textContent = randomSuit;
}


function flipCard() {
  const wrapper = document.getElementById('cardWrapper');
  wrapper.classList.add('flip');

  setTimeout(() => {
    drawCard();
  }, 400);

  setTimeout(() => {
    wrapper.classList.remove('flip');
  }, 800);
}

window.onload = drawCard;
