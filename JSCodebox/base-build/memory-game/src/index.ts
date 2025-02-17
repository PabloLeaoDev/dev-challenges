import generateCards from './genCards';

(() => {
  const memoryBoard = document.querySelector('.memory-game') as HTMLDivElement;
  let flippedCards: HTMLDivElement[] = [];
  let lockBoard = false;

  (function setCards(): void {
    const pairOfCards = generateCards(10);
    pairOfCards.forEach((card) => memoryBoard.appendChild(card));
  })();

  const cards = document.querySelectorAll('.memory-card');
  let restCardsInGame = cards.length;

  activateListener();

  function flipCard(this: HTMLDivElement): void {
    if (lockBoard) return;
    if (this === flippedCards[0]) return;

    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) checkMatch();
  }

  function checkMatch(): void {
    const [card1, card2] = flippedCards;
    const isMatch = card1.dataset.card === card2.dataset.card;

    if (isMatch) {
      disableCards();
    } else {
      unflipCards();
    }
  }

  function disableCards(): void {
    flippedCards.forEach((card) => card.removeEventListener('click', flipCard));
    restCardsInGame -= 2;
    resetBoard();
  }

  function unflipCards(): void {
    setTimeout(() => {
      flippedCards.forEach((card) => card.classList.remove('flipped'));
      resetBoard();
    }, 1000);
  }

  function resetBoard(): void {
    [flippedCards, lockBoard] = [[], false];
    if (restCardsInGame === 0) {
      setTimeout(() => {
        cards.forEach((card) => card.classList.remove('flipped'));
      }, 2000);
      restCardsInGame = cards.length;
      activateListener();
    }
  }

  function activateListener(): void {
    cards.forEach((card) => card.addEventListener('click', flipCard));
  }
})();
