const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

function checkServerRes(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getMovies = () => {
  return fetch(`${BASE_URL}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then((res) => checkServerRes(res));
}
