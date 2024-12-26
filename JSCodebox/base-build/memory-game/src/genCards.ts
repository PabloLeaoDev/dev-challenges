function createCard(cardId: number): HTMLDivElement {
  const memoryCard = document.createElement('div');
  const image = document.createElement('img');
  memoryCard.classList.add('memory-card');
  memoryCard.dataset.card = `card${cardId}`;
  image.src = '#';
  image.alt = `Card ${cardId}`;
  memoryCard.appendChild(image);
  return memoryCard;
}

function randomizeArrayOder(arr: HTMLDivElement[]): HTMLDivElement[] {
  const qtdElements = arr.length;
  const newArr: HTMLDivElement[] = [...arr];
  let randomNum: number, currentElement: HTMLDivElement;

  for (let i = 0; i < 10000; i++) {
    randomNum = Math.floor(Math.random() * qtdElements);
    currentElement = newArr[randomNum];
    newArr.splice(randomNum, 1);
    newArr.push(currentElement);
  }

  return newArr;
}

export default function generateCards(
  pairOfCardsNumber: number,
): HTMLDivElement[] {
  const cards: HTMLDivElement[] = [];

  for (let i = 0; i < pairOfCardsNumber; i++) {
    for (let j = 0; j < 2; j++) {
      cards.push(createCard(i));
    }
  }

  const cardsRandomOrder = randomizeArrayOder([...cards]);

  return cardsRandomOrder;
}
