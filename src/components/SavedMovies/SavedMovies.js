import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ cards, isChecked, onCheck, onSearchMovies, query, onChangeQuery }) {
  return (
    <main className="saved-movies">
      <SearchForm
      onSearchMovies={onSearchMovies}
      isChecked={isChecked}
      onCheck={onCheck}
      query={query}
      onChangeQuery={onChangeQuery}
    />
      <MoviesCardList cards={cards} />
    </main>
  );
}

export default SavedMovies;
