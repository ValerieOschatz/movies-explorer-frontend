import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ cards, savedMovies, isChecked, onCheck, onSearchMovies, onSearchShortMovies, query, onChangeQuery, isNotFound, onSaveMovie, onDeleteMovie }) {
  return (
    <main className="saved-movies">
      <SearchForm
        onSearchMovies={onSearchMovies}
        onSearchShortMovies={onSearchShortMovies}
        isChecked={isChecked}
        onCheck={onCheck}
        query={query}
        onChangeQuery={onChangeQuery}
      />
      <MoviesCardList cards={cards} savedMovies={savedMovies} isNotFound={isNotFound} onSaveMovie={onSaveMovie} onDeleteMovie={onDeleteMovie} />
    </main>
  );
}

export default SavedMovies;
