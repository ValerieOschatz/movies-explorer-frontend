import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards }) {
  return (
    <ul className="movies-cardlist">
      {cards.map((card, i) => (
        <MoviesCard key={i}
        card={card} />
      ))}
    </ul>
  );
}

export default MoviesCardList;
