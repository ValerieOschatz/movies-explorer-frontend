import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ isLoading }) {
  return (
    <main className="movies">
      <SearchForm />
      {isLoading && <Preloader />}
      <MoviesCardList />
    </main>
  );
}

export default Movies;
