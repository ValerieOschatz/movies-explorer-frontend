import './MoviesCard.css';

function MoviesCard({ card }) {
  const buttonClassName = `movies-card__button ${card.isSaved && 'movies-card__button_type_saved'} ${card.isChoosed && 'movies-card__button_type_choosed'}`;
  const hours = `${Math.floor(card.duration / 60)}ч`;
  const minuts = `${card.duration % 60}м`;

  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <h2 className="movies-card__title">{card.nameRU}</h2>
        <p className="movies-card__duration">{`${hours !== '0ч' ? hours : ''} ${minuts}`}</p>
      </div>
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
        <img className="movies-card__image" src={`https://api.nomoreparties.co/${card.image.url}`} alt="Картинка фильма" />
      </a>
      <button className={buttonClassName} type="button" disabled={card.isSaved && true}>{card.isSaved || card.isChoosed ? "" : "Сохранить"}</button>
    </li>
  );
}

export default MoviesCard;
