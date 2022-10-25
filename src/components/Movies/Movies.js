import { useState, useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import useDefineWidth from '../../utils/hooks/useDefineWidth';

import {
  desktopCards,
  tabletCards,
  mobileCards,
  desktopLoadedCards,
  tabletMobileLoadedCards,
  desktopMinWidth,
  tabletMinWidth
} from '../../utils/data';

function Movies({ isLoading, cards, savedMovies, isChecked, onCheck, onSearchMovies, onSearchShortMovies, query, onChangeQuery, isNotFound, onSaveMovie, onDeleteMovie }) {
  const [renderedCards, setRenderedCards] = useState([]);
  const [initialCardsCount, setInitialCardsCount] = useState(0);
  const [addedCardsCount, setAddedCardsCount] = useState(0);
  const width = useDefineWidth();

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
    if (renderedCards.length <= initialCardsCount) {
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
    <main className="movies">
      <SearchForm
        onSearchMovies={onSearchMovies}
        onSearchShortMovies={onSearchShortMovies}
        isChecked={isChecked}
        onCheck={onCheck}
        query={query}
        onChangeQuery={onChangeQuery}
      />
      {isLoading && <Preloader />}
      <MoviesCardList cards={renderedCards} savedMovies={savedMovies} isNotFound={isNotFound} onSaveMovie={onSaveMovie} onDeleteMovie={onDeleteMovie} />
      {renderedCards.length > 0 && renderedCards.length !== cards.length &&
        <button className="movies__button" onClick={handleAddCards}>Ещё</button>}
    </main>
  );
}

export default Movies;
