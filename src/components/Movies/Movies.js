import { useState, useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import useDefineWidth from '../../utils/hooks/useDefineWidth';

import {
  DESKTOP_CARDS,
  TABLET_CARDS,
  MOBILE_CARDS,
  DESKTOP_LOADED_CARDS,
  TABLET_MOBILE_LOADED_CARDS,
  DESKTOP_MIN_WIDTH,
  TABLET_MIN_WIDTH,
} from '../../utils/data';

function Movies({ isLoading, cards, savedMovies, isChecked, onCheck, onSearchMovies, onSearchShortMovies, query, onChangeQuery, isNotFound, onSaveMovie, onDeleteMovie }) {
  const [renderedCards, setRenderedCards] = useState([]);
  const [initialCardsCount, setInitialCardsCount] = useState(0);
  const [addedCardsCount, setAddedCardsCount] = useState(0);
  const width = useDefineWidth();

  useEffect(() => {
    if (width >= DESKTOP_MIN_WIDTH) {
      setInitialCardsCount(DESKTOP_CARDS);
      setAddedCardsCount(DESKTOP_LOADED_CARDS);
    } else if (width < DESKTOP_MIN_WIDTH && width >= TABLET_MIN_WIDTH) {
      setInitialCardsCount(TABLET_CARDS);
      setAddedCardsCount(TABLET_MOBILE_LOADED_CARDS);
    } else if (width < TABLET_MIN_WIDTH) {
      setInitialCardsCount(MOBILE_CARDS);
      setAddedCardsCount(TABLET_MOBILE_LOADED_CARDS);
    }
  }, [width]);

  useEffect(() => {
    setRenderedCards(cards.slice(0, initialCardsCount));
  }, [cards, initialCardsCount, width]);

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
      {!isNotFound && renderedCards.length !== cards.length &&
        <button className="movies__button" onClick={handleAddCards}>Ещё</button>}
    </main>
  );
}

export default Movies;
