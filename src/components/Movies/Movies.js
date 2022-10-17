import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ isLoading, cards, onSearch }) {
  return (
    <main className="movies">
      <SearchForm onSearch={onSearch} />
      {isLoading && <Preloader />}
      <MoviesCardList cards={cards} />
      {cards.length > 0 && <button className="movies__button">Ещё</button>}
    </main>
  );
}

export default Movies;
