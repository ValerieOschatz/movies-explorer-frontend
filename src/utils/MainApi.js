const BASE_URL = 'https://api.vo.movies-explorer.nomoredomains.icu';
// const BASE_URL = 'http://localhost:3001';

async function checkServerRes(res) {
  const data = await res.json();
  if (res.ok) {
    return data;
  }
  return Promise.reject(data.message);
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ name, email, password })
  })
  .then((res) => checkServerRes(res));
}

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ email, password })
  })
  .then((res) => checkServerRes(res));
}

export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
    credentials: 'include'
  })
  .then((res) => checkServerRes(res));
}

export const getCurrentUser = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
    credentials: 'include'
  })
  .then((res) => checkServerRes(res));
}

export const updateUser = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json"
    },
    credentials: 'include',
    body: JSON.stringify({ name, email })
  })
  .then((res) => checkServerRes(res));
}

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
    credentials: 'include'
  })
  .then((res) => checkServerRes(res));
}

export const createMovie = ({ country, director, duration, year, description, image, trailerLink, thumbnail, movieId, nameRU, nameEN }) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    credentials: 'include',
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      movieId,
      nameRU,
      nameEN,
    })
  })
  .then((res) => checkServerRes(res));
}

export const deleteMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
    },
    credentials: 'include'
  })
  .then((res) => checkServerRes(res));
}
