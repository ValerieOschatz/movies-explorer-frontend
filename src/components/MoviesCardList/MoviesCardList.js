import { useState, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

import {
  desktopCards,
  tabletCards,
  mobileCards,
  desktopLoadedCards,
  tabletMobileLoadedCards,
  desktopMinWidth,
  tabletMinWidth
} from '../../utils/data';

function MoviesCardList({ cards, isNotFound }) {
  const [renderedCards, setRenderedCards] = useState([]);
  const [initialCardsCount, setInitialCardsCount] = useState(0);
  const [addedCardsCount, setAddedCardsCount] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    function defineWidth() {
      let timer = setTimeout(() => {
        clearTimeout(timer);
        setWidth(window.innerWidth);
      }, 2000);
    }

    window.addEventListener("resize", defineWidth);

    return () => {
      window.removeEventListener("resize", defineWidth);
    }
  }, [cards]);

  useEffect(() => {
    if (width >= desktopMinWidth) {
      setInitialCardsCount(desktopCards);
      setAddedCardsCount(desktopLoadedCards);
    } else if (width < desktopMinWidth && width >= tabletMinWidth) {
      setInitialCardsCount(tabletCards);
      setAddedCardsCount(tabletMobileLoadedCards);
    } else if (width < tabletMinWidth) {
      setInitialCardsCount(mobileCards);
      setAddedCardsCount(tabletMobileLoadedCards);
    }
  }, [width]);

  useEffect(() => {
    if (renderedCards.length <= desktopCards) {
      setRenderedCards(cards.slice(0, initialCardsCount));
    }
  }, [cards, initialCardsCount, renderedCards.length]);

  function handleAddCards() {
    const cardsCount = renderedCards.length;
    if (cards.length > cardsCount) {
      const addedCards = cards.slice(cardsCount, (cardsCount + addedCardsCount));
      setRenderedCards([...renderedCards, ...addedCards]);
    }
  }

  return (
    <section className="movies-cardlist">
      <span className="movies-cardlist__not-found">{isNotFound}</span>
      {!isNotFound && (
        <ul className="movies-cardlist__list">
        {renderedCards.map((card) => (
          <MoviesCard key={card.id}
          card={card} />
        ))}
      </ul>
      )}
      {renderedCards.length > 0 && renderedCards.length !== cards.length &&
        <button className="movies-cardlist__button" onClick={handleAddCards}>Ещё</button>}
    </section>
  );
}

export default MoviesCardList;
