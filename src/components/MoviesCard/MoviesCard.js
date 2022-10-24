import { Route, Switch } from "react-router-dom";
import { findSavedMovie } from '../../utils/filter';
import './MoviesCard.css';

function MoviesCard({ card, onSaveMovie, savedMovies, onDeleteMovie }) {
  const savedMovie = findSavedMovie(savedMovies, card);
  const buttonClassName = `movies-card__button ${savedMovie && 'movies-card__button_type_saved'}`;
  const hours = `${Math.floor(card.duration / 60)}ч`;
  const minuts = `${card.duration % 60}м`;

  function handleSave() {
    onSaveMovie({
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: `https://api.nomoreparties.co/${card.image.url}`,
      trailerLink: card.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${card.image.url}`,
      movieId: card.id,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
    })
  }

  function handleDelete() {
    onDeleteMovie(savedMovie || card);
  }

  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <h2 className="movies-card__title">{card.nameRU}</h2>
        <p className="movies-card__duration">{`${hours !== '0ч' ? hours : ''} ${minuts}`}</p>
      </div>
      <Switch>
        <Route path="/movies">
          <a href={card.trailerLink} target="_blank" rel="noreferrer">
            <img className="movies-card__image" src={`https://api.nomoreparties.co/${card.image.url}`} alt="Картинка фильма" />
          </a>
          <button className={buttonClassName} type="button" onClick={!savedMovie ? handleSave : handleDelete}>{!savedMovie && "Сохранить"}</button>
        </Route>
        <Route path="/saved-movies">
          <a href={card.trailerLink} target="_blank" rel="noreferrer">
            <img className="movies-card__image" src={card.image} alt="Картинка фильма" />
          </a>
          <button className="movies-card__button movies-card__button_type_choosed" type="button" onClick={handleDelete}></button>
        </Route>
      </Switch>
    </li>
  );
}

export default MoviesCard;
