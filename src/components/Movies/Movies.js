import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ isLoading, cards, savedMovies, isChecked, onCheck, onSearchMovies, onSearchShortMovies, query, onChangeQuery, isNotFound, onSaveMovie, onDeleteMovie }) {
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
      <MoviesCardList cards={cards} savedMovies={savedMovies} isNotFound={isNotFound} onSaveMovie={onSaveMovie} onDeleteMovie={onDeleteMovie} />
    </main>
  );
}

export default Movies;
