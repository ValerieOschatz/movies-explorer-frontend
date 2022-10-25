import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ cards, savedMovies, isChecked, onCheck, onSearchMovies, query, onChangeQuery, isNotFound, onDeleteMovie }) {
  return (
    <main className="saved-movies">
      <SearchForm
        onSearchMovies={onSearchMovies}
        onSearchShortMovies={onSearchMovies}
        isChecked={isChecked}
        onCheck={onCheck}
        query={query}
        onChangeQuery={onChangeQuery}
      />
      <MoviesCardList cards={cards} savedMovies={savedMovies} isNotFound={isNotFound} onDeleteMovie={onDeleteMovie} />
    </main>
  );
}

export default SavedMovies;
