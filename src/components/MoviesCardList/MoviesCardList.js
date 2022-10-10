import './MoviesCardList.css';
import cards from '../../utils/cards';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
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
