import './MoviesCard.css';

function MoviesCard({ card }) {
  const buttonClassName = `movies-card__button ${card.isSaved && 'movies-card__button_type_saved'} ${card.isChoosed && 'movies-card__button_type_choosed'}`;

  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <h2 className="movies-card__title">{card.nameRU}</h2>
        <p className="movies-card__duration">{card.duration}</p>
      </div>
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
        <img className="movies-card__image" src={`https://api.nomoreparties.co/${card.image.url}`} alt="Картинка фильма" />
      </a>
      <button className={buttonClassName} type="button" disabled={card.isSaved && true}>{card.isSaved || card.isChoosed ? "" : "Сохранить"}</button>
    </li>
  );
}

export default MoviesCard;
