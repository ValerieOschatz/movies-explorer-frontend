import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards }) {
  return (
    <ul className="movies-cardlist">
      {cards.map((card) => (
        <MoviesCard key={card.id}
        card={card} />
      ))}
    </ul>
  );
}

export default MoviesCardList;
