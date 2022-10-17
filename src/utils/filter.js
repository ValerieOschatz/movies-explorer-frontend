export const filterByQuery = (movies, query) => {
  const searchedMovies = movies.filter(movie => movie.nameRU.toLowerCase().includes(query.toLowerCase()));
  return searchedMovies;
}
