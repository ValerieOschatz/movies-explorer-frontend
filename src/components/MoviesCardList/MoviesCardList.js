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

function MoviesCardList({ cards }) {
  const [renderedCards, setRenderedCards] = useState([]);
  const [initialCardsCount, setInitialCardsCount] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    function defineWidth() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", defineWidth);

    return () => {
      window.removeEventListener("resize", defineWidth);
    }
  }, []);

  useEffect(() => {
    if (width >= desktopMinWidth) {
      setInitialCardsCount(desktopCards);
    } else if (width < desktopMinWidth && width >= tabletMinWidth) {
      setInitialCardsCount(tabletCards);
    } else if (width < tabletMinWidth) {
      setInitialCardsCount(mobileCards);
    }
  }, [width]);

  useEffect(() => {
    setRenderedCards(cards.slice(0, initialCardsCount));
  }, [cards, initialCardsCount]);

  return (
    <section className="movies-cardlist">
      <ul className="movies-cardlist__list">
        {renderedCards.map((card) => (
          <MoviesCard key={card.id}
          card={card} />
        ))}
      </ul>
      {cards.length > 0 && <button className="movies-cardlist__button">Ещё</button>}
    </section>
  );
}

export default MoviesCardList;
