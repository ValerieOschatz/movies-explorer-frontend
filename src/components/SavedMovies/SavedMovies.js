import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ cards }) {
  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList cards={cards} />
    </main>
  );
}

export default SavedMovies;
