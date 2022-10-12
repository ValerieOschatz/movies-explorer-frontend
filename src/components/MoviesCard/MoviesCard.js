import './MoviesCard.css';

function MoviesCard({ card }) {
  const buttonClassName = `movies-card__button ${card.isSaved && 'movies-card__button_type_saved'} ${card.isChoosed && 'movies-card__button_type_choosed'}`;

  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <h2 className="movies-card__title">В погоне за Бенкси</h2>
        <p className="movies-card__duration">27 минут</p>
      </div>
      <img className="movies-card__image" src={card.image} alt="" />
      <button className={buttonClassName} type="button" disabled={card.isSaved && true}>{card.isSaved || card.isChoosed ? "" : "Сохранить"}</button>
    </li>
  );
}

export default MoviesCard;
