export const filterByQuery = (movies, query) => {
  const searchedMovies = movies.filter(movie => movie.nameRU.toLowerCase().includes(query.toLowerCase()) || movie.nameEN.toLowerCase().includes(query.toLowerCase()));
  return searchedMovies;
}

export const filterByDuration = (movies) => {
  const searchedMovies = movies.filter(movie => movie.duration <= 40);
  return searchedMovies;
}
