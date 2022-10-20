import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ isLoading, cards, isChecked, onCheck, onSearchMovies, query, onChangeQuery }) {
  return (
    <main className="movies">
      <SearchForm
        onSearchMovies={onSearchMovies}
        isChecked={isChecked}
        onCheck={onCheck}
        query={query}
        onChangeQuery={onChangeQuery}
      />
      {isLoading && <Preloader />}
      <MoviesCardList cards={cards} />
    </main>
  );
}

export default Movies;
