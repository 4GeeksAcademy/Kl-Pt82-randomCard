function drawCard() {
  const suits = ['♠', '♥', '♦', '♣'];
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  const isRed = (randomSuit === '♥' || randomSuit === '♦');

  const card = document.getElementById('card');
  card.classList.remove('red');
  if (isRed) card.classList.add('red');

  // Update corners
  document.getElementById('topLeftValue').textContent = randomValue;
  document.getElementById('topLeftSuit').textContent = randomSuit;

  document.getElementById('bottomRightValue').textContent = randomValue;
  document.getElementById('bottomRightSuit').textContent = randomSuit;

  // Center big suit
  document.getElementById('centerSuit').textContent = randomSuit;

  // Back icon matches front card suit
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

function applyCardSize() {
  const widthInput = document.getElementById('cardWidth');
  const heightInput = document.getElementById('cardHeight');
  const cardWrapper = document.getElementById('cardWrapper');
  const cardInner = cardWrapper.querySelector('.card-inner');
  const cards = cardWrapper.querySelectorAll('.card');

  const width = parseInt(widthInput.value, 10);
  const height = parseInt(heightInput.value, 10);

  if (width >= 50 && width <= 500 && height >= 50 && height <= 700) {
    cardInner.style.width = width + 'px';
    cardInner.style.height = height + 'px';

    cards.forEach(card => {
      card.style.width = width + 'px';
      card.style.height = height + 'px';
      card.style.borderRadius = Math.min(width, height) * 0.1 + 'px';
    });
  } else {
    alert('Width must be 50-500 and Height must be 50-700.');
  }
}

window.onload = () => {
  drawCard();

  // Auto-draw new card every 10 seconds
  setInterval(() => {
    flipCard();
  }, 10000);

  // Apply size button
  document.getElementById('applySizeBtn').addEventListener('click', () => {
    applyCardSize();
  });
};
