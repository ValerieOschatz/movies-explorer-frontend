import { useState, useEffect } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterByQuery, filterByDuration } from '../../utils/filter';

function SavedMovies({ cards, savedMovies, onDeleteMovie }) {
  const [query, setQuery] = useState({ value: '', isValid: false });
  const [renderedCards, setRenderedCards] = useState([]);
  const [isChecked, setChecked] = useState(false);
  const [isNotFound, setNotFound] = useState('');

  function handleCheck() {
    setChecked(!isChecked);
  }

  function handleChangeQuery(e) {
    setQuery({ value: e.target.value, isValid: e.target.validity.valid });
  }

  function handleSearch(query) {
    if (cards.length === 0) {
      return;
    }

    let resultMovies;
    if (isChecked) {
      resultMovies = filterByDuration(filterByQuery(cards, query));
    } else {
      resultMovies = filterByQuery(cards, query);
    }

    if (resultMovies.length > 0) {
      setRenderedCards(resultMovies);
      setNotFound('');
    } else {
      setNotFound('Нет результатов');
    }
  }

  useEffect(() => {
    setRenderedCards(savedMovies);
  }, [savedMovies]);

  return (
    <main className="saved-movies">
      <SearchForm
        onSearchMovies={handleSearch}
        onSearchShortMovies={handleSearch}
        isChecked={isChecked}
        onCheck={handleCheck}
        query={query}
        onChangeQuery={handleChangeQuery}
      />
      <MoviesCardList cards={renderedCards} savedMovies={savedMovies} isNotFound={isNotFound} onDeleteMovie={onDeleteMovie} />
    </main>
  );
}

export default SavedMovies;
