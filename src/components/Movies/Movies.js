import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ isLoading, cards, onSearch, isChecked, onCheck }) {
  return (
    <main className="movies">
      <SearchForm onSearch={onSearch} isChecked={isChecked} onCheck={onCheck} />
      {isLoading && <Preloader />}
      <MoviesCardList cards={cards} />
    </main>
  );
}

export default Movies;
