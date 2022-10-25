import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards, isNotFound, onSaveMovie, savedMovies, onDeleteMovie }) {
  return (
    <section className="movies-cardlist">
      <span className="movies-cardlist__not-found">{isNotFound}</span>
      {!isNotFound && (
        <ul className="movies-cardlist__list">
        {cards.map((card) => (
          <MoviesCard
            key={card.id || card.movieId}
            card={card}
            onSaveMovie={onSaveMovie}
            savedMovies={savedMovies}
            onDeleteMovie={onDeleteMovie}
          />
        ))}
      </ul>
      )}
    </section>
  );
}

export default MoviesCardList;
