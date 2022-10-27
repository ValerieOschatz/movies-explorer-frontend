export const filterByQuery = (movies, query) => {
  const searchedMovies = movies.filter(movie => movie.nameRU.toLowerCase().includes(query.toLowerCase()) || movie.nameEN.toLowerCase().includes(query.toLowerCase()));
  return searchedMovies;
}

export const filterByDuration = (movies) => {
  const searchedMovies = movies.filter(movie => movie.duration <= 40);
  return searchedMovies;
}

export const findSavedMovie = (movies, card) => {
  const savedMovie = movies.find(movie => movie.movieId === card.id);
  return savedMovie;
}

export const findSavedMoviesDelete = (movies, card) => {
  const newSavedMovies = movies.filter(movie => movie.movieId !== card.movieId);
  return newSavedMovies;
}

export const findOwnSavedMovies = (movies, user) => {
  const savedMovies = movies.filter(movie => movie.owner === user._id);
  return savedMovies;
}
