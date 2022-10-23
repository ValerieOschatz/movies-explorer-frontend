import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ isLoading, cards, isChecked, onCheck, onSearchMovies, onSearchShortMovies, query, onChangeQuery, isNotFound }) {
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
      <MoviesCardList cards={cards} isNotFound={isNotFound} />
    </main>
  );
}

export default Movies;
